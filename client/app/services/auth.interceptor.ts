
import { HttpInterceptor,HttpRequest,HttpHandler,HttpEvent } from "../../../node_modules/@angular/common/http";
import { Observable } from "../../../node_modules/rxjs";



export class AuthInterceptor implements HttpInterceptor{


intercept(req : HttpRequest<any>,handler : HttpHandler) : Observable<HttpEvent<any>>{
var token = localStorage.getItem('token');
if(token==null){
console.log('Inside login ');
return handler.handle(req);
}
else{
var reqClone = req.clone({
    setHeaders : {'Authorization' : localStorage.getItem('token')}
})
return handler.handle(reqClone);
}
}

}