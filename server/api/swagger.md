VHS Langquaid Mobile App
========================
The project involves the conception and implementation of an online presence of the Adult Education Center Langquaid eV (VHS LQ), which has been specially optimized for mobile devices. This is referred to below as an app. The app should enable the user to view, book and unsubscribe from courses. In addition, he should be shown a map for the individual seminar rooms.

**Version:** 1.0.0

**Contact information:**  
markus.guder@gmail.com  

**License:** [Apache 2.0](http://www.apache.org/licenses/LICENSE-2.0.html)

### Security
---
**PublicKey**  

|apiKey|*API Key*|
|---|---|
|Name|Authorization|
|In|header|

**JWT**  

|apiKey|*API Key*|
|---|---|
|Name|Authorization|
|In|header|

### /user/me
---
##### ***GET***
**Summary:** get me

**Description:** Get authorized User (me)

**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |

**Responses**

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | get user | [User](#user) |
| 401 | Invalid authentication credentials. |  |
| 403 | Permission 'xxx' denied on file 'yyy'. |  |
| 404 | Permission 'xxx' denied on file 'yyy'. |  |
| 409 | Resource 'xxx' already exists. |  |
| 500 | Internal Server Error. |  |

**Security**

| Security Schema | Scopes |
| --- | --- |
| JWT | |

##### ***PUT***
**Summary:** edit user details

**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| data | body | user data | Yes | object |

**Responses**

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | user has been edited | object |
| 401 | Invalid authentication credentials. |  |
| 403 | Permission 'xxx' denied on file 'yyy'. |  |
| 404 | Permission 'xxx' denied on file 'yyy'. |  |
| 409 | Resource 'xxx' already exists. |  |
| 500 | Internal Server Error. |  |

**Security**

| Security Schema | Scopes |
| --- | --- |
| JWT | |

### /user/me/courses
---
##### ***GET***
**Summary:** get my courses

**Description:** Get Users (me) courses

**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |

**Responses**

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | request successful | [ [Category](#category) ] |
| 401 | Invalid authentication credentials. |  |
| 403 | Permission 'xxx' denied on file 'yyy'. |  |
| 404 | Permission 'xxx' denied on file 'yyy'. |  |
| 409 | Resource 'xxx' already exists. |  |
| 500 | Internal Server Error. |  |

**Security**

| Security Schema | Scopes |
| --- | --- |
| JWT | |

### /user
---
##### ***POST***
**Summary:** register a new user

**Description:** register new user

**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| data | body | user data | Yes | object |

**Responses**

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 201 | user created | object |
| 401 | Invalid authentication credentials. |  |
| 403 | Permission 'xxx' denied on file 'yyy'. |  |
| 404 | Permission 'xxx' denied on file 'yyy'. |  |
| 409 | Resource 'xxx' already exists. |  |
| 500 | Internal Server Error. |  |

**Security**

| Security Schema | Scopes |
| --- | --- |
| JWT | |

### /categories
---
##### ***GET***
**Summary:** get all categories

**Description:** get all categories

**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |

**Responses**

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | request successful | [ [Category](#category) ] |
| 401 | Invalid authentication credentials. |  |
| 403 | Permission 'xxx' denied on file 'yyy'. |  |
| 404 | Permission 'xxx' denied on file 'yyy'. |  |
| 409 | Resource 'xxx' already exists. |  |
| 500 | Internal Server Error. |  |

**Security**

| Security Schema | Scopes |
| --- | --- |
| PublicKey | |

### /categories/{category_id}
---
##### ***GET***
**Summary:** get category by id

**Description:** get category by id

**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| category_id | path |  | Yes | integer |

**Responses**

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | request successful | [Category](#category) |
| 401 | Invalid authentication credentials. |  |
| 403 | Permission 'xxx' denied on file 'yyy'. |  |
| 404 | Permission 'xxx' denied on file 'yyy'. |  |
| 409 | Resource 'xxx' already exists. |  |
| 500 | Internal Server Error. |  |

**Security**

| Security Schema | Scopes |
| --- | --- |
| PublicKey | |

### /categories/{category_id}/courses
---
##### ***GET***
**Summary:** get all courses of a category

**Description:** get all courses of a category

**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| category_id | path |  | Yes | integer |

**Responses**

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | request successful | [ [Course](#course) ] |
| 401 | Invalid authentication credentials. |  |
| 403 | Permission 'xxx' denied on file 'yyy'. |  |
| 404 | Permission 'xxx' denied on file 'yyy'. |  |
| 409 | Resource 'xxx' already exists. |  |
| 500 | Internal Server Error. |  |

**Security**

| Security Schema | Scopes |
| --- | --- |
| PublicKey | |

### /courses
---
##### ***GET***
**Summary:** get all courses

**Description:** get all courses, optional search

**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| search | query |  | No | string |

**Responses**

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | request successful | [ [Course](#course) ] |
| 401 | Invalid authentication credentials. |  |
| 403 | Permission 'xxx' denied on file 'yyy'. |  |
| 404 | Permission 'xxx' denied on file 'yyy'. |  |
| 409 | Resource 'xxx' already exists. |  |
| 500 | Internal Server Error. |  |

**Security**

| Security Schema | Scopes |
| --- | --- |
| PublicKey | |

### /courses/{course_id}
---
##### ***GET***
**Summary:** get course by id

**Description:** get course by id

**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| course_id | path |  | Yes | integer |

**Responses**

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [Course](#course) |

**Security**

| Security Schema | Scopes |
| --- | --- |
| PublicKey | |

### /courses/highlights
---
##### ***GET***
**Summary:** get currated highlights

**Description:** get currated highlights

**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |

**Responses**

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ [Course](#course) ] |
| 401 | Invalid authentication credentials. |  |
| 403 | Permission 'xxx' denied on file 'yyy'. |  |
| 404 | Permission 'xxx' denied on file 'yyy'. |  |
| 409 | Resource 'xxx' already exists. |  |
| 500 | Internal Server Error. |  |

**Security**

| Security Schema | Scopes |
| --- | --- |
| PublicKey | |

### /courses/lastminute
---
##### ***GET***
**Summary:** get last minute courses

**Description:** get last minute courses

**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |

**Responses**

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [ [Course](#course) ] |
| 401 | Invalid authentication credentials. |  |
| 403 | Permission 'xxx' denied on file 'yyy'. |  |
| 404 | Permission 'xxx' denied on file 'yyy'. |  |
| 409 | Resource 'xxx' already exists. |  |
| 500 | Internal Server Error. |  |

**Security**

| Security Schema | Scopes |
| --- | --- |
| PublicKey | |

### /courses/{course_id}/apply
---
##### ***POST***
**Summary:** apply to participate in specific course

**Description:** apply to participate in specific course

**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| course_id | path |  | Yes | integer |

**Responses**

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [Course](#course) |
| 401 | Invalid authentication credentials. |  |
| 403 | Permission 'xxx' denied on file 'yyy'. |  |
| 404 | Permission 'xxx' denied on file 'yyy'. |  |
| 409 | Resource 'xxx' already exists. |  |
| 500 | Internal Server Error. |  |

**Security**

| Security Schema | Scopes |
| --- | --- |
| JWT | |

### /courses/{course_id}/signoff
---
##### ***POST***
**Summary:** signoff to participate in specific course

**Description:** signoff to participate in specific course

**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| course_id | path |  | Yes | integer |

**Responses**

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [Course](#course) |
| 401 | Invalid authentication credentials. |  |
| 403 | Permission 'xxx' denied on file 'yyy'. |  |
| 404 | Permission 'xxx' denied on file 'yyy'. |  |
| 409 | Resource 'xxx' already exists. |  |
| 500 | Internal Server Error. |  |

**Security**

| Security Schema | Scopes |
| --- | --- |
| JWT | |

### /courses/{course_id}/feedback
---
##### ***POST***
**Summary:** give feedback to a course

**Description:** give feedback to a course

**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| data | body |  | No | [CourseFeedback](#coursefeedback) |
| course_id | path |  | Yes | string |

**Responses**

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [CourseFeedback](#coursefeedback) |
| 401 | Invalid authentication credentials. |  |
| 403 | Permission 'xxx' denied on file 'yyy'. |  |
| 404 | Permission 'xxx' denied on file 'yyy'. |  |
| 409 | Resource 'xxx' already exists. |  |
| 500 | Internal Server Error. |  |

**Security**

| Security Schema | Scopes |
| --- | --- |
| JWT | |

### /contact
---
##### ***POST***
**Summary:** give general feedback to the team

**Description:** give general feedback to the team

**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| data | body |  | Yes | [GeneralFeedback](#generalfeedback) |

**Responses**

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [GeneralFeedback](#generalfeedback) |
| 401 | Invalid authentication credentials. |  |
| 403 | Permission 'xxx' denied on file 'yyy'. |  |
| 404 | Permission 'xxx' denied on file 'yyy'. |  |
| 409 | Resource 'xxx' already exists. |  |
| 500 | Internal Server Error. |  |

**Security**

| Security Schema | Scopes |
| --- | --- |
| PublicKey | |

### /auth
---
##### ***POST***
**Summary:** get authtoken from server

**Description:** get authtoken from server

**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| data | body |  | Yes | [UserData](#userdata) |

**Responses**

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [AuthData](#authdata) |
| 401 | Invalid authentication credentials. |  |
| 403 | Permission 'xxx' denied on file 'yyy'. |  |
| 404 | Permission 'xxx' denied on file 'yyy'. |  |
| 409 | Resource 'xxx' already exists. |  |
| 500 | Internal Server Error. |  |

**Security**

| Security Schema | Scopes |
| --- | --- |
| PublicKey | |

### Models
---

### Category  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| id | integer | the category ID | Yes |
| name | string | the category name | No |
| text | string | the category description | No |

### Course  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| id | integer | the course id | Yes |
| name | string | the course name | No |
| text | string | the course description | No |
| min_age | integer | minimum required age to participate | No |
| max_age | integer | maximum required age to participate | No |

### User  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| id | integer | the user ID | Yes |
| firstname | string | the users firstname | No |
| lastname | string | the users firstname | No |
| email | string | the users email adress | No |
| password | string | the users password | No |

### GeneralFeedback  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| text | string | the content of the message | Yes |
| email | string | the optional email adress | No |

### CourseFeedback  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| text | string | the content of the message | Yes |
| email | string | the optional email adress | No |

### UserData  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| email | string |  | Yes |
| password | string |  | Yes |

### AuthData  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| token | string |  | Yes |