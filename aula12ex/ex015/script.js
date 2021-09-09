function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.getElementById('res')
    
    if(fano.value.length == 0 || fano.value > ano) {
       window.alert('[ERRO] Verifique os dados e tente novamente!') 
    } else {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let gênero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 12) {
                // Criança
                img.setAttribute('src', 'homemcrianca.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'homemjovem.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'homemadulto.png')
            } else if (idade < 100) {
                // Idoso
                img.setAttribute('src', 'homemidoso.png')
            } else {
                // Morto
                img.setAttribute('src', 'pessoamorta.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 12) {
                // Criança
                img.setAttribute('src', 'mulhercrianca.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'mulherjovem.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'mulheradulta.png')
            } else if (idade < 100) {
                // Idoso
                img.setAttribute('src', 'mulheridosa.png')
            } else {
                // Morto
                img.setAttribute('src', 'pessoamorta.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
} 