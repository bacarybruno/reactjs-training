const styles = (theme) => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        [theme.breakpoints.up('md')]: {
            width: 520,
        },
        [theme.breakpoints.down('sm')]: {
            width: '100%',
        },
    },
    container: {
        height: 300,
        backgroundImage: 'url(https://ssl.gstatic.com/support/content/images/static/homepage_header_background.svg)',
        backgroundPosition: '50%',
        backgroundRepeat: 'no-repeat',
        marginTop: 30,
        paddingLeft: 16,
        paddingRight: 16,
    },
    title: {
        marginBottom: '26px',
    },
    input: {
        marginLeft: 8,
        flex: 1,
        paddingLeft: 15,
        borderRadius: 8,
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        width: 1,
        height: 28,
        margin: 4,
    },
});

export default styles;