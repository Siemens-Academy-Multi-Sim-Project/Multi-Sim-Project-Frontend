import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';

export const authGuard = () => {
  const router = inject(Router)
  if(localStorage.getItem('Auth') == null){
    router.navigate(['/login'])
    return false;
  }

  return true
}
