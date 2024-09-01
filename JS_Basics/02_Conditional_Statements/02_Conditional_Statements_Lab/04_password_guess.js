function password_guess(password) {
    console.log(password == "s3cr3t!P@ssw0rd" ? "Welcome":"Wrong password!");
}

password_guess(["qwerty"]);
password_guess(["s3cr3t!P@ssw0rd"]);
password_guess(["s3cr3t!p@ss"]);