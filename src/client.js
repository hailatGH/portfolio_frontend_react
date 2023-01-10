import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url"

export const client = sanityClient({
    projectId: 'l4dcgeh8',
    dataset: 'production',
    apiVersion: '2022-02-01',
    useCdn: true,
    token: 'skjXGsT49uwgS9MtwtrZhUd2xAg4Uvopdd4ODdPWPSC5erlWvzYLhn7vsMU6XY4S210tSm5aKY1BYpuZe49oi7c1A6NUVTQF47dRpXylBs0117gIQwmrXhxOW4P7uMyneDnY9mI1G8vRucVuuxAuNUHMmuuMzoff2WFBBaz2aKc1yPYbBXzB',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);