## Actors
- Profiles

## Auth
- Post Register
    INPUT:
        - username
        - password
        - email
    OUTPUT:
        - SUCCESSO: Utente correttamente registrato
        - ERRORE: Password non sicura
        (Venga inviata una email di conferma di registrazione)

- Post Verify
    INPUT:
        - email
        - codice di verifica
    OUTPUT:
        - SUCCESSO: Verifica confermata
        - ERRORE: Verifica non completata! Errore!!
- Post Login
    INPUT:
        - username
        - password
    OUTPUT:
        - SUCCESSO: Login effettuato correttamente
        - ERRORE: Userma/Password errate

## Profiles
- Create Profile
- Get/Receive Profile
- Update Profile

## Chats
- Create Chat
- Show Chat
- Update Chat
- Delete Chat

## Messages
- Send Messages
- Receive Messages
- Delete Messages
- Update Messages
- Visualizzazione stato Messages
