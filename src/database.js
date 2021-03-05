
//Database
export const uri = 'mongodb://localhost:27017/'+process.env.DATABASE
//export const uri = `mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@cluster0.kosui.mongodb.net/labinia?retryWrites=true&w=majority`

export const option = {
    useCreateIndex: true,
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useFindAndModify: false
};

/* mongoose.connect(uri, option)
.then(() => console.log(`conenctado a base de datos ${process.env.DATABASE}`))
.catch(e => console.log(e)); */