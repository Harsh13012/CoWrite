import mongoose  from 'mongoose';

const Connection = async (username = 'admin', password = '1234') => {
    const URL = `mongodb+srv://${username}:${password}@harsh.jhlq9jz.mongodb.net/
    harsh?retryWrites=true&w=majority`

    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('Database connected successfully');
    } catch (error) {   
        console.log('Error while connecting with the database ', error);
    }
}

export default Connection;