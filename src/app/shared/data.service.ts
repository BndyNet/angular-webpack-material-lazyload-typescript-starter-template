import { IHttpService, IHttpPromise } from 'angular';
import HelperService from './helper.service';

export interface IURLConfig {
    build: string;
    dist: string;
    distDev: string;
    distLocal: string;
}

const urlConfig: IURLConfig = {
    build: "https://api.myjson.com",
    dist: "https://api.myjson.com",
    distDev: "https://api.myjson.com",
    distLocal: "https://api.myjson.com"
};

class DataService {

    private baseURL: string = urlConfig[__ENV];

    static $inject = ['$http', 'HelperService'];

    constructor(private $http: IHttpService, private helperService: HelperService) { }

    get(path, id?, baseURL: string = this.baseURL): IHttpPromise<{}> {
        return this.$http.get(baseURL + path)
            .then(this.helperService.handleSuccessResponse, this.helperService.handleErrorResponse);
    }

    post(path, data, baseURL: string = this.baseURL): IHttpPromise<{}> {
        return this.$http.post(baseURL + path, data)
            .then(this.helperService.handleSuccessResponse, this.helperService.handleErrorResponse);;
    }

    put(path, id, data, baseURL: string = this.baseURL): IHttpPromise<{}> {
        return this.$http.put(baseURL + path + '/' + id, data)
            .then(this.helperService.handleSuccessResponse, this.helperService.handleErrorResponse);;
    }

    delete(path, id, baseURL: string = this.baseURL): IHttpPromise<{}> {
        return this.$http.delete(baseURL + path + '/' + id)
            .then(this.helperService.handleSuccessResponse, this.helperService.handleErrorResponse);;
    }


}

export default DataService;