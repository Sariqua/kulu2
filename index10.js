<html>
    <body>
    <form onsubmit="saveToLoalStorage(event)">
    <label>Name</label>
    <input type="text" name="username" required/>
    <label>Emailid</label>
    <input type="email" name="emailid" required/>
    <label>phone Number</label>
    <input type="tel" name="phonenumber" required/>
    <button>Submit</button>
    </form>
    <script>
        function saveTolocalStorage(event){
        event.preventDefault();
        const name =event.target.username.value;
        const email=event.target.emailid.value;
        const phonenumber=event.target.phonenumber.value;
        localStorage.setItem('name',name);
        localStorage.setItem('email',email);
        localStorage.setItem('phonenumber',phonenumber);
        }


        </script>

        </body>
</html>