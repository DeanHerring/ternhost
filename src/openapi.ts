export default {"openapi":"3.1.0","info":{"title":"Terndev","version":"0.1.0"},"paths":{"/api/v1/hello/":{"get":{"tags":["hello"],"summary":"Hello","operationId":"hello-hello","responses":{"200":{"description":"Successful Response","content":{"application/json":{"schema":{}}}}}}},"/api/v1/auth/login":{"post":{"tags":["auth"],"summary":"Login","description":"OAuth2 compatible token login, get an access token for future requests","operationId":"auth-login","requestBody":{"content":{"application/x-www-form-urlencoded":{"schema":{"$ref":"#/components/schemas/Body_auth-login"}}},"required":true},"responses":{"200":{"description":"Successful Response","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Token"}}}},"422":{"description":"Validation Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/HTTPValidationError"}}}}}}},"/api/v1/auth/test-token":{"get":{"tags":["auth"],"summary":"Test Token","description":"Test access token","operationId":"auth-test_token","responses":{"200":{"description":"Successful Response","content":{"application/json":{"schema":{"$ref":"#/components/schemas/User"}}}}},"security":[{"OAuth2PasswordBearerCookie":[]}]},"post":{"tags":["auth"],"summary":"Test Token","description":"Test access token","operationId":"auth-test_token","responses":{"200":{"description":"Successful Response","content":{"application/json":{"schema":{"$ref":"#/components/schemas/User"}}}}},"security":[{"OAuth2PasswordBearerCookie":[]}]}},"/api/v1/auth/signup":{"post":{"tags":["auth"],"summary":"Signup","description":"Signup","operationId":"auth-signup","requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/UserSignup"}}},"required":true},"responses":{"200":{"description":"Successful Response","content":{"application/json":{"schema":{"$ref":"#/components/schemas/User"}}}},"422":{"description":"Validation Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/HTTPValidationError"}}}}}}},"/api/v1/auth/send-verify-link":{"get":{"tags":["auth"],"summary":"Send Verify Link","description":"Send email confirm link","operationId":"auth-send_verify_link","responses":{"200":{"description":"Successful Response","content":{"application/json":{"schema":{}}}}},"security":[{"OAuth2PasswordBearerCookie":[]}]}},"/api/v1/auth/email-confirm":{"get":{"tags":["auth"],"summary":"Confirm Email","description":"Confirm email","operationId":"auth-confirm_email","parameters":[{"name":"token","in":"query","required":true,"schema":{"type":"string","title":"Token"}}],"responses":{"200":{"description":"Successful Response","content":{"application/json":{"schema":{}}}},"422":{"description":"Validation Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/HTTPValidationError"}}}}}}},"/api/v1/domains/landing-tld":{"get":{"tags":["domains"],"summary":"Landing Tld","operationId":"domains-landing_tld","responses":{"200":{"description":"Successful Response","content":{"application/json":{"schema":{"items":{"$ref":"#/components/schemas/DomainTopLevel"},"type":"array","title":"Response Domains-Landing Tld"}}}}}}},"/api/v1/domains/landing-query":{"get":{"tags":["domains"],"summary":"Landing Query","description":"Search available domains","operationId":"domains-landing_query","parameters":[{"name":"domain","in":"query","required":true,"schema":{"type":"string","title":"Domain"}}],"responses":{"200":{"description":"Successful Response","content":{"application/json":{"schema":{"$ref":"#/components/schemas/DomainQuery"}}}},"422":{"description":"Validation Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/HTTPValidationError"}}}}}}},"/api/v1/hosting/offers-all":{"get":{"tags":["hosting"],"summary":"Landing All","operationId":"hosting-landing_all","responses":{"200":{"description":"Successful Response","content":{"application/json":{"schema":{}}}}}}},"/api/v1/hosting/_offers-for-month":{"get":{"tags":["hosting"],"summary":"Test For Month","operationId":"hosting-test_for_month","parameters":[{"name":"month_id","in":"query","required":true,"schema":{"type":"string","title":"Month Id"}}],"responses":{"200":{"description":"Successful Response","content":{"application/json":{"schema":{"type":"array","items":{"$ref":"#/components/schemas/BaseHosting"},"title":"Response Hosting-Test For Month"}}}},"422":{"description":"Validation Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/HTTPValidationError"}}}}}}},"/api/v1/test/nukedb":{"get":{"tags":["test"],"summary":"Nukedb","operationId":"test-nukedb","responses":{"200":{"description":"Successful Response","content":{"application/json":{"schema":{}}}}}},"post":{"tags":["test"],"summary":"Nukedb","operationId":"test-nukedb","responses":{"200":{"description":"Successful Response","content":{"application/json":{"schema":{}}}}}}},"/api/v1/test/send_email":{"post":{"tags":["test"],"summary":"Hello","operationId":"test-hello","parameters":[{"name":"mailto","in":"query","required":true,"schema":{"type":"string","format":"email","title":"Mailto"}}],"responses":{"200":{"description":"Successful Response","content":{"application/json":{"schema":{}}}},"422":{"description":"Validation Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/HTTPValidationError"}}}}}}},"/api/v1/test/verify_link_mail":{"get":{"tags":["test"],"summary":"Get Verify Link By Mail","operationId":"test-get_verify_link_by_mail","parameters":[{"name":"email","in":"query","required":true,"schema":{"type":"string","format":"email","title":"Email"}}],"responses":{"200":{"description":"Successful Response","content":{"application/json":{"schema":{}}}},"422":{"description":"Validation Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/HTTPValidationError"}}}}}}},"/api/v1/test/verify_link":{"get":{"tags":["test"],"summary":"Get Verify L","operationId":"test-get_verify_l","responses":{"200":{"description":"Successful Response","content":{"application/json":{"schema":{}}}}},"security":[{"OAuth2PasswordBearerCookie":[]}]}}},"components":{"schemas":{"BaseDomain":{"properties":{"domain":{"type":"string","title":"Domain"},"monthly_price":{"type":"number","title":"Monthly Price"},"annual_price":{"type":"number","title":"Annual Price"}},"type":"object","required":["domain","monthly_price","annual_price"],"title":"BaseDomain"},"BaseHosting":{"properties":{"id":{"type":"integer","title":"Id"},"title":{"type":"string","title":"Title"},"monthly_price":{"type":"number","title":"Monthly Price"},"discount":{"type":"integer","title":"Discount"},"details":{"$ref":"#/components/schemas/HostingDetails"}},"type":"object","required":["id","title","monthly_price","discount","details"],"title":"BaseHosting"},"Body_auth-login":{"properties":{"grant_type":{"anyOf":[{"type":"string","pattern":"password"},{"type":"null"}],"title":"Grant Type"},"username":{"type":"string","title":"Username"},"password":{"type":"string","title":"Password"},"scope":{"type":"string","title":"Scope","default":""},"client_id":{"anyOf":[{"type":"string"},{"type":"null"}],"title":"Client Id"},"client_secret":{"anyOf":[{"type":"string"},{"type":"null"}],"title":"Client Secret"}},"type":"object","required":["username","password"],"title":"Body_auth-login"},"DomainQuery":{"properties":{"available":{"anyOf":[{"type":"boolean"},{"type":"null"}],"title":"Available"},"domain":{"anyOf":[{"$ref":"#/components/schemas/BaseDomain"},{"type":"null"}]},"alternatives":{"items":{"$ref":"#/components/schemas/BaseDomain"},"type":"array","title":"Alternatives"}},"type":"object","required":["available","domain","alternatives"],"title":"DomainQuery"},"DomainTopLevel":{"properties":{"id":{"type":"integer","title":"Id"},"tld":{"type":"string","title":"Tld"},"monthly_price":{"type":"number","title":"Monthly Price"},"annual_price":{"type":"number","title":"Annual Price"}},"type":"object","required":["id","tld","monthly_price","annual_price"],"title":"DomainTopLevel"},"HTTPValidationError":{"properties":{"detail":{"items":{"$ref":"#/components/schemas/ValidationError"},"type":"array","title":"Detail"}},"type":"object","title":"HTTPValidationError"},"HostingDetails":{"properties":{"domains":{"type":"string","title":"Domains"},"storage":{"type":"string","title":"Storage"},"bandwith":{"type":"string","title":"Bandwith"},"ssl":{"type":"string","title":"Ssl"},"support":{"type":"string","title":"Support"}},"type":"object","required":["domains","storage","bandwith","ssl","support"],"title":"HostingDetails"},"Token":{"properties":{"access_token":{"type":"string","title":"Access Token"},"token_type":{"type":"string","title":"Token Type","default":"bearer"}},"type":"object","required":["access_token"],"title":"Token"},"User":{"properties":{"email":{"type":"string","format":"email","title":"Email"},"phone":{"type":"string","title":"Phone"},"created_at":{"type":"string","format":"date-time","title":"Created At","default":"2024-03-07T13:56:34.906066"},"is_active":{"type":"boolean","title":"Is Active","default":true},"is_email_verified":{"type":"boolean","title":"Is Email Verified","default":false},"id":{"anyOf":[{"type":"integer"},{"type":"null"}],"title":"Id"}},"type":"object","required":["email","phone"],"title":"User"},"UserSignup":{"properties":{"email":{"type":"string","format":"email","title":"Email"},"phoneNumber":{"type":"string","title":"Phonenumber"},"password":{"type":"string","title":"Password"},"confirmPassword":{"type":"string","title":"Confirmpassword"}},"type":"object","required":["email","phoneNumber","password","confirmPassword"],"title":"UserSignup"},"ValidationError":{"properties":{"loc":{"items":{"anyOf":[{"type":"string"},{"type":"integer"}]},"type":"array","title":"Location"},"msg":{"type":"string","title":"Message"},"type":{"type":"string","title":"Error Type"}},"type":"object","required":["loc","msg","type"],"title":"ValidationError"}},"securitySchemes":{"OAuth2PasswordBearerCookie":{"type":"oauth2","in":"cookie","name":"Authorization","flows":{"password":{"scopes":{},"tokenUrl":"/api/v1/auth/login"}}}}}} as const
