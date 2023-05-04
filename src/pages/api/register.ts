import type { APIRoute } from "astro";
import { client } from "../../utils";

export const register: APIRoute = async ({ request }) => {
    try {
        const data = await client({ endpoint: '/auth/register', body: request.body })
        console.log('response data', data);

        if (!data.success) {
            return new Response(
                JSON.stringify({
                    message: data?.message,
                }),
                { status: 400 }
            );
        }
        // Do something with the data, then return a success response
        return new Response(
            JSON.stringify({
                message: data?.message,
            }),
            { status: 200 }
        );
    } catch (error: any) {
        return new Response(
            JSON.stringify({
                message: error?.message,
            }),
            { status: 500 }
        );

    }

}