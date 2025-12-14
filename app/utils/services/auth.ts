import type { SdkUser } from "@dynamic-labs/sdk-api-core";

const API_URI = import.meta.env.VITE_PUBLIC_API_URL || "http://localhost:3000";

export async function createUser(user: SdkUser, publicKey: string, token: string) {
    const response = await fetch(`${API_URI}/auth/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ` + token,
        },
        body: JSON.stringify({ user, publicKey }),
    });
    const data = await response.json();
    if (!response.ok) throw new Error("Failed to register user");
    return data;
}

export async function logUser(userId: string, publicKey: string, token: string) {
    const response = await fetch(`${API_URI}/auth/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ` + token,
        },
        body: JSON.stringify({ userId, publicKey }),
    });
    const data = await response.json();
    if (!response.ok) throw new Error("Failed to login user");
    
    return data.user;
}

export async function isAdmin(token: string) {
    const response = await fetch(`${API_URI}/auth/verify-admin`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ` + token,
        },
    });
    console.log("verify-admin status", response.status);

    if (!response.ok) return false;
    
    const data = await response.json();
    return data.success;
}