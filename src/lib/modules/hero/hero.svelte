<script lang="ts">
  import { Hero } from '$lib/components/hero';

  const serverIp = 'ssn.gg';

  const createRipple = (event: MouseEvent) => {
    const button = event.currentTarget as HTMLElement;
    const btnRect = button.getBoundingClientRect();

    const circle = document.createElement('span');
    const diameter = Math.max(btnRect.width, btnRect.height);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - (btnRect.left + radius)}px`;
    circle.style.top = `${event.clientY - (btnRect.top + radius)}px`;
    circle.classList.add('ripple');

    const ripple = button.getElementsByClassName('ripple')[0];
    if (ripple) ripple.remove();

    button.appendChild(circle);
  };

  const handleClick = (event: MouseEvent) => {
    createRipple(event);
    navigator.clipboard.writeText(serverIp);
  };
</script>

<Hero {serverIp} on:click={handleClick} />
