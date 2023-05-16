<script lang="ts">
	import { getMessagingToken } from "$lib/api/firebase";
	import { onMount } from "svelte";
    import { v4 as uuidV4 } from 'uuid';

    const NOTIFICATION_UUID_KEY = '__notification_uuid';
    const NOTIFICATION_TOKEN_KEY = '__notification_token';
    const NOTIFICATION_DISMISSED_KEY = "__notification_dismissed";

    let showSubscriptionPopup = false;

    const postNotificationTokenToServer = async (uuid: string, token: string) => {
        const res = await fetch('/api/firebase', {
            method: 'POST',
            body: JSON.stringify({ uuid, token })
        });
        if (res.ok) {
            console.log('Token registered!')
        }
    }

    const init = async () => {
        let uuid = localStorage.getItem(NOTIFICATION_UUID_KEY);
        if (!uuid) {
            uuid = uuidV4();
            uuid && localStorage.setItem(NOTIFICATION_UUID_KEY, uuid);
        }
        const token = localStorage.getItem(NOTIFICATION_TOKEN_KEY);
        const dismissed = localStorage.getItem(NOTIFICATION_DISMISSED_KEY);
        if (!dismissed && !token) {
            showSubscriptionPopup = true;
        }
    }

    const subscribe = async () => {
        const result = await Notification.requestPermission();
        if (result == 'granted') {
            const token = await getMessagingToken();
            console.log(token);
            localStorage.setItem(NOTIFICATION_TOKEN_KEY, token);
            const uuid = localStorage.getItem(NOTIFICATION_UUID_KEY);
            uuid && await postNotificationTokenToServer(uuid, token);
            showSubscriptionPopup = false;
        }
    }

    const dismiss = async () => {
        localStorage.setItem(NOTIFICATION_DISMISSED_KEY, 'true');
    }
 
    onMount(() => init());
</script>

<div class="subscription-popup bg_green" class:show={showSubscriptionPopup}>
    <div class="subscription-message">
        <span class="font_bold">Subscribe to our notifications!</span>
        <small class="text_dark">
            Keep up to date with our content.
        </small>
    </div>
    <div class="subscription-buttons">
        <button class="btn btn_small btn_light mr_2" on:click={subscribe}>Subscribe now</button>
        <button class="btn btn_small" on:click={dismiss}>I'm not interested</button>
    </div>
</div>

<style lang="scss">
    $md: map-get($grid-breakpoints, 'md');
    $sm: map-get($grid-breakpoints, 'sm');

    @media (max-width: $sm) {
        .subscription-popup {
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
        .subscription-popup .subscription-buttons {
            margin-top: 1rem;
        }
    }

    @media (max-width: $md) {
        .subscription-popup {
           align-items: flex-start;
        }
        .subscription-popup .subscription-buttons {
            display: flex;
            flex-direction: column;
            button:last-child {
                margin-top: .5rem;
            }
        }
    }

    .subscription-popup {
        width: 100%;
        padding: 1rem 1.5rem;
        z-index: 99999;
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        align-items: center;
        box-shadow: 0px -4px 22px -9px rgba(0, 0, 0, 0.5);
        transform: translateY(100%);
        transition: transform 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);
        &.show {
            transform: translateY(0);
        }
    }
    .subscription-popup .subscription-message {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
    }
</style>