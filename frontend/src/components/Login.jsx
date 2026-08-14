import { useState } from "react";

function Login() {
  const [isRegister, setIsRegister] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
  };

  return (
    <div className="login-page">
      <div className="container py-5">
        <div className="row justify-content-center">

          <div className="col-md-6 col-lg-5">

            <div className="card login-card shadow-sm border-0">
              <div className="card-body p-4 p-md-5">

                <div className="text-center mb-4">
                  <div className="login-icon">🍳</div>

                  <h2 className="fw-bold">
                    {isRegister ? "Create an Account" : "Welcome Back"}
                  </h2>

                  <p className="text-muted">
                    {isRegister
                      ? "Create your account to save your recipes."
                      : "Login to access your saved recipes."}
                  </p>
                </div>

                <form onSubmit={handleSubmit}>

                  {isRegister && (
                    <div className="mb-3">
                      <label className="form-label fw-semibold">
                        Name
                      </label>

                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  )}

                  <div className="mb-3">
                    <label className="form-label fw-semibold">
                      Email
                    </label>

                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label className="form-label fw-semibold">
                      Password
                    </label>

                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      placeholder="Enter your password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn generate-btn w-100"
                  >
                    {isRegister ? "Create Account" : "Login"}
                  </button>

                </form>

                <div className="text-center mt-4">

                  <p className="mb-0 text-muted">
                    {isRegister
                      ? "Already have an account?"
                      : "Don't have an account?"}
                  </p>

                  <button
                    type="button"
                    className="btn btn-link p-0"
                    onClick={() => setIsRegister(!isRegister)}
                  >
                    {isRegister ? "Login" : "Create an account"}
                  </button>

                </div>

              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

export default Login;