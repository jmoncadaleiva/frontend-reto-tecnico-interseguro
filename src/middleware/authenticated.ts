import { useAuthStore } from "@/stores/auth";
import { type RouteLocationNormalized, type NavigationGuardNext } from 'vue-router';


export const isAuthenticated = ((to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext ) =>{
    const authStore = useAuthStore()
    if(!authStore.isAuthenticated){
     return next({name: 'Login'})
    }
    return next();
 })