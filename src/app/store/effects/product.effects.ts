import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ProductService } from '../../services/product.service';
import * as ProductActions from '../actions/product.actions';
import { catchError, map, mergeMap, of } from 'rxjs';
import { Product } from '../../models/product.model';
import { Update } from '@ngrx/entity';

@Injectable()
export class ProductEffects {
    constructor(
        private actions$: Actions,
        private productService: ProductService
    ) { }

    // LOAD PRODUCTS
    loadProducts$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ProductActions.loadProducts),
            mergeMap(() =>
                this.productService.getProducts().pipe(
                    map((products: Product[]) =>
                        ProductActions.loadProductsSuccess({ products })
                    ),
                    catchError(error =>
                        of(ProductActions.loadProductsFailure({ error: error.message }))
                    )
                )
            )
        )
    );

    // ADD PRODUCT
    addProduct$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ProductActions.addProduct),
            mergeMap(({ product }) =>
                this.productService.addProduct(product).pipe(
                    map((newProduct: Product) =>
                        ProductActions.addProductSuccess({ product: newProduct })
                    ),
                    catchError(error =>
                        of(ProductActions.addProductFailure({ error: error.message }))
                    )
                )
            )
        )
    );

    // UPDATE PRODUCT
    updateProduct$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ProductActions.updateProduct),
            mergeMap(({ product }) =>
                this.productService.updateProduct(product).pipe(
                    map((updated: Product) => {
                        const update: Update<Product> = {
                            id: updated.id,
                            changes: updated
                        };
                        return ProductActions.updateProductSuccess({ product: update });
                    }),
                    catchError(error =>
                        of(ProductActions.updateProductFailure({ error: error.message }))
                    )
                )
            )
        )
    );

    // DELETE PRODUCT
    deleteProduct$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ProductActions.deleteProduct),
            mergeMap(({ id }) =>
                this.productService.deleteProduct(id).pipe(
                    map(() => ProductActions.deleteProductSuccess({ id })),
                    catchError(error =>
                        of(ProductActions.deleteProductFailure({ error: error.message }))
                    )
                )
            )
        )
    );
}
