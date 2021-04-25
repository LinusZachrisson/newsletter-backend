1. Välkommen till get-my-newsletter server repot, här kommer lite instruktioner för hur de jobbar med denna app, för att komma åt front-end repot går ni in på denna länk: https://github.com/LinusZachrisson/newsletter-frontend.

2. Servern är kopplad till mongoDB atlas så där lagras alla användare som skapas i appen.

3. Börja med att köra en npm install i konsollen så att alla packeten som behövs för att köra appen finns hos er.

4. Sedan start du servern med nodemon start i konsolen

5. Eftersom att admin sidan är monolit och körs enbart på servern så kommer du åt den genom urlen: http://localhost:3000/admin och sedan skriver inte lösenordet: admin. Där kommer du då åt alla användarnamn som är registrerade samt alla e-mail adresser som är registrerade för nyhetsbrevet.
