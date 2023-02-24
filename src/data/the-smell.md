### Project Report: E-Commerce Web Development Project with Strapi CMS, GraphQL, Next.js, auth0,  Tailwind CSS, and Stripe

### Introduction
- This web development project was built using a range of modern technologies, including Strapi CMS, GraphQL, URQL, Next.js, Tailwind CSS, and Stripe. The goal of the project was to create a website that allows users to browse products, add them to their cart, and checkout using Stripe as a payment gateway.

### Backend Development
- The backend of the website was built using Strapi CMS and Cloudinary to store images. Strapi was set up to create products and the strapi-cloudinary plugin was used to directly store images on Cloudinary. This allowed for easy management of product information and images.
- GraphQL was added to the backend to enable efficient data fetching, and URQL was used on the frontend to simplify the process of making API requests. This helped to streamline the development process and improve performance.

### Frontend Development
- The frontend of the website was built using Next.js, a popular framework built on top of React. Tailwind CSS was used for styling, which allowed for rapid development and easy customization of the website's appearance.

- Dynamic pages were created for the product details page, and a global state was implemented to keep track of the number of products in the user's cart. Small functions, such as adding and removing items from the cart, calculating the total price, and displaying it in the checkout area, were also developed to enhance the user experience.

### Payment Processing
- For payment processing, Stripe was integrated into the project. Additional functionality was added, such as the ability to add promo codes and shipping costs. Finally, a checkout page was created to allow users to complete their orders.

### Authentication
- The entire project was authenticated with Auth0, which was also used to create user accounts on the website. Auth0 was linked to the Stripe gateway to obtain user details such as name, which improved the checkout process and helped to prevent fraudulent transactions.

### Conclusion
- Overall, this web development project successfully integrated a range of modern technologies to create a website that provides a seamless user experience for browsing and purchasing products. The use of Strapi CMS, GraphQL, URQL, Next.js, Tailwind CSS, and Stripe helped to streamline development and improve performance, while the integration of Auth0 provided robust authentication and user account management.


