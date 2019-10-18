import { db } from '../firebase/firebase';
import { async } from 'q';
const Api = {
    getProductCategories: async () => {
        let categories = [];
        return db.collection('RESTAURANTS/lrApMZq9rBNLQGtzVjKa/MENU')
            .get()
            .then(querySnapshot => {
                querySnapshot.forEach((doc) => {
                    categories.push(
                        {
                            foodCategory: doc.data().food_category,
                            foodTypes: doc.data().food_types
                        });
                });

                return categories;
            })
            .catch(err =>
                console.log(err));
    },

    getCategoryId: async (categoryName) => {
        return db.collection(`RESTAURANTS/lrApMZq9rBNLQGtzVjKa/MENU`)
            .where('food_category', '==', categoryName)
            .get()
            .then(querySnapshot =>
                querySnapshot.docs[0].id
            );

    },

    getProductsByCategory: async (categoryName, subcategoryName) => {
        console.log(categoryName, subcategoryName);
        let categoryId = await Api.getCategoryId(categoryName);
        let path = `RESTAURANTS/lrApMZq9rBNLQGtzVjKa/MENU/${categoryId}`;

        if (subcategoryName)
            path += `/${subcategoryName}`;
        else
            path += `/${categoryName.toUpperCase()}`;

        return await db.collection(path)
            .get()
            .then(async querySnapshot => {

                let products = [];

                querySnapshot.forEach(doc => {
                    products.push(doc.data());
                });

                return products;
            });
    }
}


export default Api;