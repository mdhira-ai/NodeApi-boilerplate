module.exports = mongoose => {
    const data = mongoose.model(
      "myuser",
      mongoose.Schema(
        {
            name: String,
            email: String,
            password: String,
            role: String,
            active: Boolean
        },
        { timestamps: true }
      ),
    );
  
    return data;
  };