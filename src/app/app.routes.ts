import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // your routes
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true   // 👈 THIS IS REQUIRED
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
