import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb://user:interview@ac-bhqry79-shard-00-00.kiaqtky.mongodb.net:27017,ac-bhqry79-shard-00-01.kiaqtky.mongodb.net:27017,ac-bhqry79-shard-00-02.kiaqtky.mongodb.net:27017/?ssl=true&replicaSet=atlas-4w7tr3-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;