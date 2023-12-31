import { TestBed } from '@angular/core/testing';
import { AuthenticationService } from './authentication.service';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from 'src/app/helper/auth.gaurd';
describe('UserService', () => {
  let service: AuthenticationService;
  let authservice:AuthGuard;
  let access_token = 
  'eyJhbGciOiJSUzI1NiIsImtpZCI6IjQ0NDNBQzYyMzlFQzczRkIxQkYxQzhDMUEwNjczQUU0IiwieDV0IjoiT0xKTWZ2UzMzbk5TWVo2ZV9LSVRzX2hMeFRFIiwidHlwIjoiSldUIn0.eyJpc3MiOiJodHRwczovL3BkaXMtaWRlbnRpdHktc2VydmVyLmlyaWRpdW0ucHJvLnByZXFpbi5jb20iLCJuYmYiOjE3MDE2MjM1MjgsImlhdCI6MTcwMTYyMzUyOCwiZXhwIjoxNzAxNzA5OTI4LCJhdWQiOlsicHJlcWluLmNvbS5hcGkiLCJodHRwczovL3BkaXMtaWRlbnRpdHktc2VydmVyLmlyaWRpdW0ucHJvLnByZXFpbi5jb20vcmVzb3VyY2VzIl0sInNjb3BlIjpbIm9wZW5pZCIsInByZXFpbi5jb20uZGVmYXVsdCIsIm9mZmxpbmVfYWNjZXNzIl0sImFtciI6WyJwd2QiXSwiY2xpZW50X2lkIjoicHJlcWluLmNvbS5jbGllbnQucHJvYXBpIiwic3ViIjoiMzI5OTc4IiwiYXV0aF90aW1lIjoxNzAxNjIzNTI4LCJpZHAiOiJsb2NhbCIsIm5hbWUiOiJkdW1teWRhdGFmZWVkc0BwcmVxaW4uY29tIiwiZW1haWwiOiJkdW1teWRhdGFmZWVkc0BwcmVxaW4uY29tIiwicHJlcWluX2NvbnRhY3RGaXJtSWQiOiI4NjA1MDYiLCJwcmVxaW5fZmlybUlkIjoiOTUyIiwicHJlcWluX2Zpcm1OYW1lIjoiUHJlcWluIiwicHJlcWluX2Zpcm1UeXBlIjoiU29mdHdhcmUgQ29tcGFueSIsInByZXFpbl9wcm9kdWN0IjoibW9iaWxlIiwicHJlcWluX3B1YmxpY2F0aW9uSWRzIjpbIjg3OSIsIjg4OCIsIjkyMyJdLCJwcmVxaW5fc3Vic2NyaXB0aW9uIjpbImFzbGJlbiIsImFzbGJlbm5kIiwiZXNnaW1wYWN0IiwiZXNncHJvX3MiLCJlc2dyaXNrX3MiLCJmYXNsYmVuIiwiZmJkIiwiZmJkZSIsImZiZGYiLCJmYmRtYiIsImZiZG1pbmYiLCJmYmRtcGQiLCJmYmRtcmUiLCJmYmRtdmMiLCJmYm4iLCJmY2YiLCJmY2ljIiwiZmNtbmYiLCJmY21uZ3AiLCJmY21ubHAiLCJmZXNnYWVtIiwiZmVzZ2FpIiwiZmVzZ2FyIiwiZmVzZ2FzYXNiIiwiZmVzZ2ZncGEiLCJmZXNnZmdwdCIsImZlc2dmaSIsImZlc2dmaWEiLCJmZXNnZmxwYSIsImZlc2dmbWFmZiIsImZlc2dmbWMiLCJmZXNnZm1pcCIsImZlc2dmbXJkIiwiZmVzZ2ZtcmUiLCJmZXNnZm1yc2FzYiIsImZlc2dmbXQiLCJmZXNnZm10aSIsImZlc2dmciIsImZlc2dmcmEiLCJmZXNnaWEiLCJmZXNnaWMiLCJmZXNnaWZtdCIsImZlc2dpdCIsImZmdCIsImZnbGZtIiwiZmdsaSIsImZoZmJtIiwiZmhmZXNnZm0iLCJmaGZlc2dpIiwiZmhmZiIsImZoZmZhZiIsImZoZmZtIiwiZmhmZm1jIiwiZmhmaGZwIiwiZmhmaSIsImZoZmljIiwiZmhmaWNkIiwiZmhmbiIsImZoZnNwZiIsImZpYyIsImZpbmZkIiwiZmluZmRwIiwiZmluZmVzZ2ZtIiwiZmluZmVzZ2kiLCJmaW5mZiIsImZpbmZmbSIsImZpbmZmbWMiLCJmaW5maGZwIiwiZmluZmkiLCJmaW5maWMiLCJmaW5maWNkIiwiZmluZm4iLCJmaW5mc20iLCJmaW5mc3BmIiwiZm1kbCIsImZucmRwIiwiZm5yZXNnZm0iLCJmbnJlc2dpIiwiZm5yZiIsImZucmZtIiwiZm5yZm1jIiwiZm5yaGZwIiwiZm5yaSIsImZucmljIiwiZm5yaWNkIiwiZm5ybiIsImZucnNtIiwiZm5yc3BmIiwiZnBjYmNmIiwiZnBjYm0iLCJmcGNxaWJtIiwiZnBkZCIsImZwZGRwIiwiZnBkZXNnZiIsImZwZGVzZ2ZtIiwiZnBkZXNnaSIsImZwZGVzZ3IiLCJmcGRmIiwiZnBkZm0iLCJmcGRmbWMiLCJmcGRoZnAiLCJmcGRpIiwiZnBkaWMiLCJmcGRpY2QiLCJmcGRuIiwiZnBkc20iLCJmcGRzcGYiLCJmcGVkcCIsImZwZWVzZ2YiLCJmcGVlc2dmbSIsImZwZWVzZ2kiLCJmcGVlc2dyIiwiZnBlZiIsImZwZWZtIiwiZnBlZm1jIiwiZnBlaGZwIiwiZnBlaSIsImZwZWljIiwiZnBlaWNkIiwiZnBlbiIsImZwZXNtIiwiZnBlc3BmIiwiZnJlZCIsImZyZWRwIiwiZnJlZXNnZm0iLCJmcmVlc2dpIiwiZnJlZiIsImZyZWZtIiwiZnJlZm1jIiwiZnJlaGZwIiwiZnJlaSIsImZyZWljIiwiZnJlaWNkIiwiZnJlbiIsImZyZXNtIiwiZnJlc3BmIiwiZnNlY24iLCJmc3BkYiIsImZzcGRpbmYiLCJmc3BkcGQiLCJmc3BkcmUiLCJmc3BkdmMiLCJmc3BmIiwiZnNwdCIsImZ2Y2QiLCJmdmNkZSIsImZ2Y2RmIiwiZnZjZXNnciIsImZ2Y24iLCJmdmNzbSIsInBjYXNoZmxvdyIsInBlIiwicGVfY29uc3VsdGFudCIsInBlX2NvbnN1bHRhbnRfY29udGFjdCIsInBlX2Z1bmQiLCJwZV9mdW5kX3BlcmZvcm1hbmNlIiwicGVfZnVuZG1hbmFnZXIiLCJwZV9mdW5kbWFuYWdlcl9jb250YWN0IiwicGVfZnVuZG1hbmFnZXJfZnVuZCIsInBlX2Z1bmRtYW5hZ2VyX3BlcmZvcm1hbmNlIiwicGVfaW52ZXN0b3IiLCJwZV9pbnZlc3Rvcl9jb250YWN0IiwicGVfaW52ZXN0b3JfZnVuZCIsInBlX2ludmVzdG9yX2Z1bmRtYW5hZ2VyIiwicGVfaW52ZXN0b3JfbmV3cyIsInBmcmVlIiwicGhmbSIsInBoaSIsInBpZCIsInBpZm0iLCJwaWkiLCJwbmZtIiwicG5pIiwicHBkIiwicHBkZCIsInBwZGZtIiwicHBkaSIsInBwZm0iLCJwcGZ0IiwicHBpIiwicHBybyIsInByZCIsInByZXFpbmFwaWludmVzdG9yY29tbWl0bWVudHMiLCJwcmVxaW5hcGlpbnZlc3RvcnMiLCJwcmZtIiwicHJpIiwicHNlYyIsInB2ZCIsInJlIiwicmVfY29uc3VsdGFudCIsInJlX2NvbnN1bHRhbnRfY29udGFjdCIsInJlX2Z1bmQiLCJyZV9mdW5kbWFuYWdlciIsInJlX2Z1bmRtYW5hZ2VyX2NvbnRhY3QiLCJyZV9mdW5kbWFuYWdlcl9mdW5kIiwicmVfaW52ZXN0b3IiLCJyZV9pbnZlc3Rvcl9jb250YWN0IiwicmVfaW52ZXN0b3JfZnVuZCIsInJlX2ludmVzdG9yX2Z1bmRtYW5hZ2VyIiwicmVfaW52ZXN0b3JfbmV3cyJdLCJwcmVxaW5fdXNlcklkIjoiMzI5OTc4IiwicHJlcWluX3VzZXJOYW1lIjoiRHVtbXkgRGF0YSBGZWVkcyIsInN1YnNjcmlwdGlvbl9jb3VudF9jbGFzc2ljIjoiMTMiLCJzdWJzY3JpcHRpb25fY291bnRfcHJvIjoiMjcifQ.gOYcYg_G-LNHPTdvqMth2a57xCSILWIOpTQt2o66lHgxy5o12z89QWZT4o4NcR2BpXyQcatYetdhzXYBd3H3QLqqqsn82agyUigb1CJchwLFKBljafPwJtwlpoXCN6jVCUWIF-IyL5BKqDYYv0y3R0kjEfweSXLj1HSKGRk9HHz0-eTAWDBM7tiwFPykN-rZJ6IoSXpH9a3LxtYhvLet1FlN25arDmiFEkSg6yx1LKOtemyObLiM2z1rasAAQWFrbD6qWgpYFalkdugLJ7c84j2lpQ2BFKmDDbJZiMufbL4ra6qsLjqph6-NvsvjhZRkjmMAB79qpq1bnwcf0c3XHA';

  let refresh_token = '821B76BF4EE46D6DD58D06B6847DDDA95513DE817E0ED32F0D4170114173D5AA-1'
  let expire_time = '86400';
  let user = {
    "access_token": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjQ0NDNBQzYyMzlFQzczRkIxQkYxQzhDMUEwNjczQUU0IiwieDV0IjoiT0xKTWZ2UzMzbk5TWVo2ZV9LSVRzX2hMeFRFIiwidHlwIjoiSldUIn0.eyJpc3MiOiJodHRwczovL3BkaXMtaWRlbnRpdHktc2VydmVyLmlyaWRpdW0ucHJvLnByZXFpbi5jb20iLCJuYmYiOjE3MDE2MjM1MjgsImlhdCI6MTcwMTYyMzUyOCwiZXhwIjoxNzAxNzA5OTI4LCJhdWQiOlsicHJlcWluLmNvbS5hcGkiLCJodHRwczovL3BkaXMtaWRlbnRpdHktc2VydmVyLmlyaWRpdW0ucHJvLnByZXFpbi5jb20vcmVzb3VyY2VzIl0sInNjb3BlIjpbIm9wZW5pZCIsInByZXFpbi5jb20uZGVmYXVsdCIsIm9mZmxpbmVfYWNjZXNzIl0sImFtciI6WyJwd2QiXSwiY2xpZW50X2lkIjoicHJlcWluLmNvbS5jbGllbnQucHJvYXBpIiwic3ViIjoiMzI5OTc4IiwiYXV0aF90aW1lIjoxNzAxNjIzNTI4LCJpZHAiOiJsb2NhbCIsIm5hbWUiOiJkdW1teWRhdGFmZWVkc0BwcmVxaW4uY29tIiwiZW1haWwiOiJkdW1teWRhdGFmZWVkc0BwcmVxaW4uY29tIiwicHJlcWluX2NvbnRhY3RGaXJtSWQiOiI4NjA1MDYiLCJwcmVxaW5fZmlybUlkIjoiOTUyIiwicHJlcWluX2Zpcm1OYW1lIjoiUHJlcWluIiwicHJlcWluX2Zpcm1UeXBlIjoiU29mdHdhcmUgQ29tcGFueSIsInByZXFpbl9wcm9kdWN0IjoibW9iaWxlIiwicHJlcWluX3B1YmxpY2F0aW9uSWRzIjpbIjg3OSIsIjg4OCIsIjkyMyJdLCJwcmVxaW5fc3Vic2NyaXB0aW9uIjpbImFzbGJlbiIsImFzbGJlbm5kIiwiZXNnaW1wYWN0IiwiZXNncHJvX3MiLCJlc2dyaXNrX3MiLCJmYXNsYmVuIiwiZmJkIiwiZmJkZSIsImZiZGYiLCJmYmRtYiIsImZiZG1pbmYiLCJmYmRtcGQiLCJmYmRtcmUiLCJmYmRtdmMiLCJmYm4iLCJmY2YiLCJmY2ljIiwiZmNtbmYiLCJmY21uZ3AiLCJmY21ubHAiLCJmZXNnYWVtIiwiZmVzZ2FpIiwiZmVzZ2FyIiwiZmVzZ2FzYXNiIiwiZmVzZ2ZncGEiLCJmZXNnZmdwdCIsImZlc2dmaSIsImZlc2dmaWEiLCJmZXNnZmxwYSIsImZlc2dmbWFmZiIsImZlc2dmbWMiLCJmZXNnZm1pcCIsImZlc2dmbXJkIiwiZmVzZ2ZtcmUiLCJmZXNnZm1yc2FzYiIsImZlc2dmbXQiLCJmZXNnZm10aSIsImZlc2dmciIsImZlc2dmcmEiLCJmZXNnaWEiLCJmZXNnaWMiLCJmZXNnaWZtdCIsImZlc2dpdCIsImZmdCIsImZnbGZtIiwiZmdsaSIsImZoZmJtIiwiZmhmZXNnZm0iLCJmaGZlc2dpIiwiZmhmZiIsImZoZmZhZiIsImZoZmZtIiwiZmhmZm1jIiwiZmhmaGZwIiwiZmhmaSIsImZoZmljIiwiZmhmaWNkIiwiZmhmbiIsImZoZnNwZiIsImZpYyIsImZpbmZkIiwiZmluZmRwIiwiZmluZmVzZ2ZtIiwiZmluZmVzZ2kiLCJmaW5mZiIsImZpbmZmbSIsImZpbmZmbWMiLCJmaW5maGZwIiwiZmluZmkiLCJmaW5maWMiLCJmaW5maWNkIiwiZmluZm4iLCJmaW5mc20iLCJmaW5mc3BmIiwiZm1kbCIsImZucmRwIiwiZm5yZXNnZm0iLCJmbnJlc2dpIiwiZm5yZiIsImZucmZtIiwiZm5yZm1jIiwiZm5yaGZwIiwiZm5yaSIsImZucmljIiwiZm5yaWNkIiwiZm5ybiIsImZucnNtIiwiZm5yc3BmIiwiZnBjYmNmIiwiZnBjYm0iLCJmcGNxaWJtIiwiZnBkZCIsImZwZGRwIiwiZnBkZXNnZiIsImZwZGVzZ2ZtIiwiZnBkZXNnaSIsImZwZGVzZ3IiLCJmcGRmIiwiZnBkZm0iLCJmcGRmbWMiLCJmcGRoZnAiLCJmcGRpIiwiZnBkaWMiLCJmcGRpY2QiLCJmcGRuIiwiZnBkc20iLCJmcGRzcGYiLCJmcGVkcCIsImZwZWVzZ2YiLCJmcGVlc2dmbSIsImZwZWVzZ2kiLCJmcGVlc2dyIiwiZnBlZiIsImZwZWZtIiwiZnBlZm1jIiwiZnBlaGZwIiwiZnBlaSIsImZwZWljIiwiZnBlaWNkIiwiZnBlbiIsImZwZXNtIiwiZnBlc3BmIiwiZnJlZCIsImZyZWRwIiwiZnJlZXNnZm0iLCJmcmVlc2dpIiwiZnJlZiIsImZyZWZtIiwiZnJlZm1jIiwiZnJlaGZwIiwiZnJlaSIsImZyZWljIiwiZnJlaWNkIiwiZnJlbiIsImZyZXNtIiwiZnJlc3BmIiwiZnNlY24iLCJmc3BkYiIsImZzcGRpbmYiLCJmc3BkcGQiLCJmc3BkcmUiLCJmc3BkdmMiLCJmc3BmIiwiZnNwdCIsImZ2Y2QiLCJmdmNkZSIsImZ2Y2RmIiwiZnZjZXNnciIsImZ2Y24iLCJmdmNzbSIsInBjYXNoZmxvdyIsInBlIiwicGVfY29uc3VsdGFudCIsInBlX2NvbnN1bHRhbnRfY29udGFjdCIsInBlX2Z1bmQiLCJwZV9mdW5kX3BlcmZvcm1hbmNlIiwicGVfZnVuZG1hbmFnZXIiLCJwZV9mdW5kbWFuYWdlcl9jb250YWN0IiwicGVfZnVuZG1hbmFnZXJfZnVuZCIsInBlX2Z1bmRtYW5hZ2VyX3BlcmZvcm1hbmNlIiwicGVfaW52ZXN0b3IiLCJwZV9pbnZlc3Rvcl9jb250YWN0IiwicGVfaW52ZXN0b3JfZnVuZCIsInBlX2ludmVzdG9yX2Z1bmRtYW5hZ2VyIiwicGVfaW52ZXN0b3JfbmV3cyIsInBmcmVlIiwicGhmbSIsInBoaSIsInBpZCIsInBpZm0iLCJwaWkiLCJwbmZtIiwicG5pIiwicHBkIiwicHBkZCIsInBwZGZtIiwicHBkaSIsInBwZm0iLCJwcGZ0IiwicHBpIiwicHBybyIsInByZCIsInByZXFpbmFwaWludmVzdG9yY29tbWl0bWVudHMiLCJwcmVxaW5hcGlpbnZlc3RvcnMiLCJwcmZtIiwicHJpIiwicHNlYyIsInB2ZCIsInJlIiwicmVfY29uc3VsdGFudCIsInJlX2NvbnN1bHRhbnRfY29udGFjdCIsInJlX2Z1bmQiLCJyZV9mdW5kbWFuYWdlciIsInJlX2Z1bmRtYW5hZ2VyX2NvbnRhY3QiLCJyZV9mdW5kbWFuYWdlcl9mdW5kIiwicmVfaW52ZXN0b3IiLCJyZV9pbnZlc3Rvcl9jb250YWN0IiwicmVfaW52ZXN0b3JfZnVuZCIsInJlX2ludmVzdG9yX2Z1bmRtYW5hZ2VyIiwicmVfaW52ZXN0b3JfbmV3cyJdLCJwcmVxaW5fdXNlcklkIjoiMzI5OTc4IiwicHJlcWluX3VzZXJOYW1lIjoiRHVtbXkgRGF0YSBGZWVkcyIsInN1YnNjcmlwdGlvbl9jb3VudF9jbGFzc2ljIjoiMTMiLCJzdWJzY3JpcHRpb25fY291bnRfcHJvIjoiMjcifQ.gOYcYg_G-LNHPTdvqMth2a57xCSILWIOpTQt2o66lHgxy5o12z89QWZT4o4NcR2BpXyQcatYetdhzXYBd3H3QLqqqsn82agyUigb1CJchwLFKBljafPwJtwlpoXCN6jVCUWIF-IyL5BKqDYYv0y3R0kjEfweSXLj1HSKGRk9HHz0-eTAWDBM7tiwFPykN-rZJ6IoSXpH9a3LxtYhvLet1FlN25arDmiFEkSg6yx1LKOtemyObLiM2z1rasAAQWFrbD6qWgpYFalkdugLJ7c84j2lpQ2BFKmDDbJZiMufbL4ra6qsLjqph6-NvsvjhZRkjmMAB79qpq1bnwcf0c3XHA",
    "expires_in": 86400,
    "token_type": "Bearer",
    "refresh_token": "821B76BF4EE46D6DD58D06B6847DDDA95513DE817E0ED32F0D4170114173D5AA-1",
    "scope": "offline_access openid preqin.com.default"
};
  
let userName="dummydatafeeds@preqin.com"
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterModule.forRoot([])]//,
    });
    service = TestBed.inject(AuthenticationService);
    authservice = TestBed.inject(AuthGuard);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call login and validate  token', () => {


    service.login(userName);

    expect(localStorage.getItem('access_token')).toEqual(access_token);
    expect(localStorage.getItem('refresh_token')).toEqual(refresh_token);
    expect(localStorage.getItem('expire_time')).toEqual(expire_time);
    expect(localStorage.getItem('user')).toEqual(JSON.stringify(user));

    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('expire_time');
    localStorage.removeItem('user');

  });


  it('should call isTokenValid to validate expiry_date', () => {
    let testDate = Date.now() + 4 * 86400 * 1000;
    localStorage.setItem('expire_time', testDate.toString());
    let isValidToken = authservice.isTokenValid();
    expect(isValidToken).toEqual(true);
  });

});
