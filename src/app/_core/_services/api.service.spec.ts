import { HttpClientTestingModule, HttpTestingController  } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { ApiService } from './api.service';
import { environment as env } from '@env/environment';
import { PageState, IPage } from '@core/_types';

describe('ApiService', () => {
  let service: ApiService;
  let mockHttp: HttpTestingController;
  const successStatusResponse = { status: 200 };
  const mockEndpoint = '/test';
  const mockParams = { limit: 10, page: 1 };
  const error = { statusCode: 404, message: 'Not Found' };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
    });

    service = TestBed.inject(ApiService);
    mockHttp = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should expect service to call get', () => {
    service.get(mockEndpoint, mockParams).subscribe(result => {
      expect(result).toEqual(successStatusResponse);
    });

    const req = mockHttp.expectOne(`${env.apiUrl}${mockEndpoint}?limit=10&page=1`);
    expect(req.request.method).toBe('GET');
    expect(req.request.url).toBe(`${env.apiUrl}${mockEndpoint}`);
    req.flush(successStatusResponse);
  });

  it('should expect service to call post', () => {
    service.post(mockEndpoint).subscribe(result => {
      expect(result).toEqual(successStatusResponse);
    });

    const req = mockHttp.expectOne(`${env.apiUrl}${mockEndpoint}`);
    expect(req.request.method).toBe('POST');
    expect(req.request.url).toBe(`${env.apiUrl}${mockEndpoint}`);
    req.flush(successStatusResponse);
  });

  it('should expect service to call put', () => {
    service.put(mockEndpoint).subscribe(result => {
      expect(result).toEqual(successStatusResponse);
    });

    const req = mockHttp.expectOne(`${env.apiUrl}${mockEndpoint}`);
    expect(req.request.method).toBe('PUT');
    expect(req.request.url).toBe(`${env.apiUrl}${mockEndpoint}`);
    req.flush(successStatusResponse);
  });

  it('should expect service to call delete', () => {
    service.delete(mockEndpoint).subscribe(result => {
      expect(result).toEqual(successStatusResponse);
    });

    const req = mockHttp.expectOne(`${env.apiUrl}${mockEndpoint}`);
    expect(req.request.method).toBe('DELETE');
    expect(req.request.url).toBe(`${env.apiUrl}${mockEndpoint}`);
    req.flush(successStatusResponse);
  });

  describe('Method: _formatErrors', () => {
    beforeEach(() => {
      spyOn(service, 'get').and.throwError(JSON.stringify(error));
    });

    it('should throw error properly', () => {
        expect(service.get).toThrowError(JSON.stringify(error));
    });
  });

  it('should paginate PageSta', () => {
    const pageState: PageState = {
      page: 0,
      limit: 1,
      filters: {},
      sort: 'created_at',
      sortDirection: 'desc'
    };

    const page = service.paginate(pageState);

    expect(page.direction).toBe(pageState.sortDirection);
    expect(page.sort).toBe(pageState.sort);
  });
});
