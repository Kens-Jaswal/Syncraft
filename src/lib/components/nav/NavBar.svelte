<script>
    const links = [
        { name: 'dashboard', path: '/private'},
        { name: 'Branches', path: '/private/branches'},
        {name: 'partners', path: '/private/partners'},
        {name: 'users', path: '/private/users'},
        {name: 'labtest', path: '/private/labtests'},
        {name: 'access control', path: '/private/access-control'}

    ]
</script>


<nav class="flex flex-col gap-4">
    {#each links as link }
        <a href={link.path}>{link.name}</a>
    {/each}
</nav>