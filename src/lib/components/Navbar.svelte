<script>
	import Logo from '$lib/assets/images/logo.svg?component';
	import FacebookIcon from '$lib/assets/icons/facebook.svg?component';
	import TwitterIcon from '$lib/assets/icons/twitter.svg?component';
	import LinkedInIcon from '$lib/assets/icons/linkedin.svg?component';
	import XIcon from '$lib/assets/icons/x.svg?component';
	import MenuIcon from '$lib/assets/icons/menu.svg?component';
	import CloseIcon from '$lib/assets/icons/close.svg?component';
	import ArrowRightIcon from '$lib/assets/icons/arrow-right.svg?component';
	import { page } from '$app/stores';
	import { beforeNavigate } from '$app/navigation';

	let isMenuOpen = false;

	const toggleMenu = () => (isMenuOpen = !isMenuOpen);

	beforeNavigate(() => {
		isMenuOpen = false;
	});
</script>

<header class="header">
	<div class="container">
		<div class="navbar">
			<a href="/" class="navbar_brand">
				<Logo width="180" height="50" />
			</a>
			<nav class="navbar_nav">
				<a href="/" class="link-icon">
					<FacebookIcon width="20" height="20" />
				</a>
				<a href="/" class="link-icon">
					<TwitterIcon width="20" height="20" />
				</a>
				<a href="/" class="link-icon">
					<LinkedInIcon width="20" height="20" />
				</a>
				<!-- <a href="/">
					<XIcon width="32" height="32" />
				</a> -->
			</nav>
			<button type="button" class="navbar_toggler" on:click={() => toggleMenu()}>
				<MenuIcon width="50" height="40" />
			</button>
			<div class="navbar_menu bg_blue" class:open={isMenuOpen}>
				<div class="container">
					<div class="display_flex align_center mt_3">
						<a href="/" class="navbar_menu_brand">
							<Logo width="180" height="50" />
						</a>
						<button class="navbar_menu__close ml_auto" on:click={() => toggleMenu()}>
							<CloseIcon width="24" height="24" />
						</button>
					</div>
					<nav class="navbar_menu__nav">
						<a
							href="/who-we-are"
							class="display_flex align_center text_gray"
							class:text_green={$page.url.pathname.includes('who-we-are')}
						>
							<h2 class="m_0">Who we are?</h2>
							<ArrowRightIcon width="42" height="42" class="ml_auto" />
						</a>
						<div class="divider divider_gray divider_4 my_3" />
						<a
							href="/what-we-fund"
							class="display_flex align_center text_gray mt_2"
							class:text_green={$page.url.pathname.includes('what-we-fund')}
						>
							<h2 class=" m_0">What we fund and why</h2>
							<ArrowRightIcon width="42" height="42" class="ml_auto" />
						</a>
						<div class="divider divider_gray divider_4 my_3" />
						<a
							href="/how-we-fund"
							class="display_flex align_center text_gray"
							class:text_green={$page.url.pathname.includes('how-we-fund')}
						>
							<h2 class=" m_0">How we fund?</h2>
							<ArrowRightIcon width="42" height="42" class="ml_auto" />
						</a>
						<div class="divider divider_gray divider_4 my_3" />
						<a
							href="/how-we-work"
							class="display_flex align_center text_gray"
							class:text_green={$page.url.pathname.includes('how-we-work')}
						>
							<h2 class=" m_0">How we work together</h2>
							<ArrowRightIcon width="42" height="42" class="ml_auto" />
						</a>
						<div class="divider divider_gray divider_4 my_3" />
						<a
							href="/resources"
							class="display_flex align_center text_gray"
							class:text_green={$page.url.pathname.includes('resources')}
						>
							<h2 class=" m_0">Resources</h2>
							<ArrowRightIcon width="42" height="42" class="ml_auto" />
						</a>
						<div class="divider divider_gray divider_4 my_3" />
					</nav>
					<nav class="navbar_menu__links mt_5">
						<a href="/" class="mr_3 link-icon">
							<FacebookIcon width="20" height="20" />
						</a>
						<a href="/" class="mr_3 link-icon">
							<TwitterIcon width="20" height="20" />
						</a>
						<a href="/" class="mr_3 link-icon">
							<LinkedInIcon width="20" height="20" />
						</a>
						<!-- <a href="/" class="mr_3">
							<XIcon width="42" height="42" />
						</a> -->
					</nav>
				</div>
			</div>
		</div>
	</div>
</header>

<style lang="scss">
	$blue: map-get($colors, 'blue');
	.header {
		background-color: $blue;
	}
	.navbar {
		background-color: $blue;
		width: 100%;
		display: inline-flex;
		padding: 1rem 0rem;
		z-index: 9;
		position: relative;
		&_nav {
			margin-left: auto;
			display: inline-flex;
			list-style: none;
			padding: 0;
			margin-right: 2rem;
			align-items: center;
			a {
				margin-right: 1rem;
			}
		}
		&_menu {
			position: fixed;
			top: 0;
			left: 0;
			right: 0;
			z-index: 10;
			height: 100vh;
			overflow: hidden;
			transform: translate3d(0, -100%, 0);
			will-change: transform;
			transition: all 0.7s cubic-bezier(0.075, 0.82, 0.165, 1), opacity 0.3s ease 0.5s;
			transition-delay: 0.4s;
			opacity: 0;
			.container {
				opacity: 0;
				transition: opacity 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);
			}

			&.open {
				opacity: 1;
				transition: all 0.7s cubic-bezier(1, 0, 0, 1), opacity 0.3s ease;
				transition-delay: 0.001s;
				transform: translate3d(0, 0, 0);
				.container {
					opacity: 1;
					transition-delay: 0.6s;
				}
			}

			&__nav {
				margin-top: 4rem;
			}

			&__links {
				display: flex;
				align-items: center;
			}

			&__close {
				cursor: pointer;
			}
		}
	}
</style>
