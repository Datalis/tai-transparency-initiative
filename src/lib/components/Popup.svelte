<script>
    // Importamos onMount para ejecutar código cuando se monte el componente
    import {onMount, beforeUpdate} from 'svelte';
    import Logo from '$lib/assets/images/logo.svg?component';

    // Variable reactiva para controlar la visibilidad del popup
    export let visible = false;

    // Función para cerrar el popup
    function closePopup() {
        visible = false;
        // Guardamos en localStorage que el popup ya ha sido cerrado
        localStorage.setItem('popupShown', 'true');
        document.body.style.overflow = '';
    }

    // Cuando se monta el componente, verificamos si ya se mostró el popup antes
    onMount(() => {
        if (localStorage.getItem('popupShown') !== 'true') {
            visible = true;
            document.body.style.overflow = 'hidden';
        }
    });

    beforeUpdate(() => {
        if (!visible) {
            document.body.style.overflow = ''; // Asegura que el desplazamiento se restaure si el popup se va a ocultar
        }
    });
</script>

{#if visible}
    <div id="popup" class="popup">
        <div class="popup-inner">
            <div class="logo navbar_brand display_flex mr_auto">
                <Logo/>
            </div>
            <h1 class=title-popup>We have a new name!!</h1>
            <p>As a result of collective reflection with our members and with the broader funder community, we decided
                to change our name to Trust, Accountability, and Inclusion Collaborative, to better reflect our core
                values. We keep our acronym TAI, symbolizing the continuity of our actions and that our vision remains
                steadfast:</p>
            <p style="font-weight: bold">We envision more democratic and just societies, where equity and inclusion
                prevail, people are informed, governments and the corporate sector act with integrity toward people and
                the planet, and public good is enhanced through civic engagement and collective action.</p>
            <p>Thank you for being part of our community! We will continue working with our members, other funders,
                funder networks, and other stakeholders towards our shared vision.</p>
            <button class="close-button btn btn_dark btn_small" on:click={closePopup}>Explore</button>
        </div>
    </div>
{/if}

<style>
    .logo {
        width: 100px;
        margin: 0 auto;
        z-index: 9999;
    }

    .popup {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.7);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1001;
        overflow-y: auto;
    }


    .popup-inner {
        position: relative;
        background: white;
        padding: 40px 70px;
        width: 70%;
        max-width: 816px;
        border-radius: 8px;
        text-align: left;
    }

    .title-popup {
        font-family: Lato;
        font-size: 40px;
        font-weight: 600;
        line-height: 62px;
        letter-spacing: -0.035em;
        text-align: center;
        margin: 10px auto 10px;
        color: #736EFF;

    }

    .popup p {
        font-family: Lato;
        text-align: center;
        font-size: 17px;
        line-height: 30px;
        letter-spacing: 0em;
        text-align: center;
    }

    .close-button {
        cursor: pointer;
        display: block;
        margin: 50px auto 0;

    }

    .close-button:hover {
        background-color: #003366; /* Darker blue */
    }

    @media (max-width: 767px) {
        .popup {
            overflow-y: auto; /* Habilita el desplazamiento para el popup */
        }

        .popup-inner {
            height: auto; /* O cualquier altura que desees para el contenido interno */
            overflow-y: scroll; /* Asegura que el contenido interno tenga desplazamiento */
            -webkit-overflow-scrolling: touch; /* Permite un desplazamiento suave en iOS */
            width: 90%;
            padding: 20px;
        }
    }

</style>
