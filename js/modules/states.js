const container = document.querySelector("main > section:nth-of-type(4)")



export function errorState() {
    container.insertAdjacentHTML('afterbegin',
        `
            <article>
                <p>Oeps, er is iets fout gegaan.</p> 
                <h1>Herlaad de pagina om het opnieuw te proberen</h1>
            </article>
        `)
}

export function hideLoading() {
    container.classList.remove("skeleton")
}