const { test, expect } = require('@playwright/test');
var userId;

test('Test to get and post', async ({ request }) => {
    const getRequest = await request.get(`https://reqres.in/api/users?page=2`, {
    });
    const res = await getRequest.json();
    await expect(getRequest.ok()).toBeTruthy();
    await expect(getRequest.json().data).not.toBeNull
    await expect(getRequest.status()).toBe(200)
});

test('should Post a request', async ({ request }) => {
    const response = await request.post(`https://reqres.in/api/users`, {
        data: {
            "name": "morpheus",
            "job": "leader"
        }
    });
    const res = await response.json();
    userId = await JSON.stringify(res.id)
    await expect(response.ok()).toBeTruthy();
    await expect(response.json().data).not.toBeNull
    await expect(response.status()).toBe(201)
});

test('should update a request', async ({ request }) => {
    const response = await request.put(`https://reqres.in/api/users/`+ userId, {
        data: {
            "name": "morpheusEdit",
            "job": "leaderEdit"
        }
    });
    await expect(response.ok()).toBeTruthy();
    await expect(response.json().data).not.toBeNull
    await expect(response.status()).toBe(200)
});

test('should delete a request', async ({ request }) => {
    const response = await request.delete(`https://reqres.in/api/users/`+ userId, {
    });
    await expect(response.status()).toBe(204)
});

