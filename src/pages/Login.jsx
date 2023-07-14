import logo from "../image/Logo.svg"
import decorLeft from "../image/person-planning-a-startup-business 1.svg"
import decorRight from "../image/person-facing-challenges-at-work 1.svg"
import line from "../image/Vector 391.svg"
import CustomButton from "../components/CustomButton";

function Login() {
    return (
        <div className="page-container">
            <div className="Logo">
             <img src={logo} />
            </div>

            <div className="decor-left">
             <img src={decorLeft} />
            </div>

            <div className="decor-right">
             <img src={decorRight} />
            </div>

            <div className="line">
             <img src={line} />
            </div>

            <form>
                <h4>Masuk</h4>
                <h5>Masukkan alamat email / nomor telepon dan kata sandi yang telah anda daftarkan.</h5>
               
                <div className = "input">
                <div className = "icon">
                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 12.5C15.3137 12.5 18 9.81371 18 6.5C18 3.18629 15.3137 0.5 12 0.5C8.68629 0.5 6 3.18629 6 6.5C6 9.81371 8.68629 12.5 12 12.5ZM16 6.5C16 8.70914 14.2091 10.5 12 10.5C9.79086 10.5 8 8.70914 8 6.5C8 4.29086 9.79086 2.5 12 2.5C14.2091 2.5 16 4.29086 16 6.5Z" fill="#8E8C80"/>
                    <path d="M24 22.5C24 24.5 22 24.5 22 24.5H2C2 24.5 0 24.5 0 22.5C0 20.5 2 14.5 12 14.5C22 14.5 24 20.5 24 22.5ZM22 22.493C21.9971 21.9995 21.6924 20.5209 20.3358 19.1642C19.0313 17.8597 16.5782 16.5 12 16.5C7.42176 16.5 4.96871 17.8597 3.66419 19.1642C2.30751 20.5209 2.00285 21.9995 2 22.493H22Z" fill="#8E8C80"/>
                </svg>
                </div>
                <input type="text" name="username" placeholder="user@user.com" />
                </div>
                <div class="input">
                    <div class = "icon">
                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C13.6569 2 15 3.34315 15 5V11H9V5C9 3.34315 10.3431 2 12 2ZM16.5 11V5C16.5 2.51472 14.4853 0.5 12 0.5C9.51472 0.5 7.5 2.51472 7.5 5V11C5.84315 11 4.5 12.3431 4.5 14V21.5C4.5 23.1569 5.84315 24.5 7.5 24.5H16.5C18.1569 24.5 19.5 23.1569 19.5 21.5V14C19.5 12.3431 18.1569 11 16.5 11ZM7.5 12.5H16.5C17.3284 12.5 18 13.1716 18 14V21.5C18 22.3284 17.3284 23 16.5 23H7.5C6.67157 23 6 22.3284 6 21.5V14C6 13.1716 6.67157 12.5 7.5 12.5Z" fill="#8E8C80"/>
                    </svg>
                    </div>
                    <input type="password" name="password" placeholder="*****" />
                </div>
                
                <CustomButton text={"Masuk Sekarang"}/>
            </form>
        </div>
    );
}

export default Login