
/*
    Essa função é responsável por gerar uma senha aelatória. Como propriedade, ela aceita um número inteiro que determina o número da senha que será gerada. 
*/
export default function generatePass(maxLenght: number) {
    let password: string = '';
    const characters: string = 'LlUuCcAaSs1234567890!@#RrEeHh'

    //Esse for adiciona a variável password uma letra aleatoriamente até chegar no número definido do tamanho da senha.
    for(let i = 0; i < maxLenght; i++) {
        //const aleatoryNumber = Math.floor(Math.random() * characters.length);
        password += (characters.charAt(
            Math.floor(Math.random() * characters.length)
        ))
    }

    return password
}