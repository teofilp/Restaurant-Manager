import { db } from '../firebase/firebase';
import { async } from 'q';
const Api = {
    getProductCategories: async () => {
        let categories = [];
        return db.collection('RESTAURANTS/lrApMZq9rBNLQGtzVjKa/MENU')
            .get()
            .then(querySnapshot => {
                querySnapshot.forEach((doc) => {
                    categories.push(doc.data().food_category);
                });
                return Promise.resolve(categories);
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

    getProductsByCategory: async (categoryName) => {
        let categoryId = await Api.getCategoryId(categoryName);

        return db.collection(`RESTAURANTS/lrApMZq9rBNLQGtzVjKa/MENU/${categoryId}/${categoryName.toUpperCase()}`)
            .get()
            .then(querySnapshot => {

                let products = [];

                querySnapshot.forEach(doc => {
                    products.push(doc.data());
                });

                return products;
            });
    }
}


export default Api;