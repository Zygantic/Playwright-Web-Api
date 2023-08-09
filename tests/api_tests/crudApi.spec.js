const { test, expect } = require('@playwright/test');
let url = "https://reqres.in/api/users/";
let userId;

test('should successfully response on get request', async ({ request }) => {
    const getRequest = await request.get(url, {
    });
    const res = await getRequest.json();
    await expect(getRequest.ok()).toBeTruthy();
    await expect(getRequest.json().data).not.toBeNull
    await expect(getRequest.status()).toBe(200)
});

test('should Post a request', async ({ request }) => {
    const response = await request.post(url, {
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
    const response = await request.put(url + userId, {
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
    const response = await request.delete(url + userId, {
    });
    await expect(response.status()).toBe(204)
});

