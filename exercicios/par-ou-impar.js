const startGame =(chooseUser, Usernumber) =>{
    
    // Verifica se tem argumento 1 e 2
    if (chooseUser !=='par'|| ( chooseUser !== 'impar' && Usernumber < 0 )) {
        console.log( 
            'Por favor digite: "par" ou "impar" um espaço e depois um número qualquer'
        );
        return;
    }

    // Sorteia um número
    const drawnNumber = Math.floor(Math.random()* (5 - 0 + 1 )) + 0;
    const total = drawnNumber + Number(Usernumber);

    // Verifica se o número sorteado é par ou impar 
    const checkNumberDrawer = total % 2 === 0 ? 'par':'impar';

    // Verifica se o computador ficou com par ou impar 
    const chooseComputer = chooseUser === 'par' ? 'impar' : 'par';

    // Verifica e anuncia a vitoria 
    checkNumberDrawer === chooseUser
    ? console.log(`Você escolheu ${chooseUser} e o computador escolheu ${chooseComputer}, o resultado foi ${total}. Você ganhou `
    )
    : console.log(
        `Você escolheu ${chooseUser} e o computador escolheu ${chooseComputer}, o resultado foi ${total}. Você perdeu otário !`
        );

    }

    
       startGame(process.argv[2], process.argv[3]);



