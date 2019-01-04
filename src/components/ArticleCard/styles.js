import red from '@material-ui/core/colors/red';

const styles = theme => ({
    card: {
        maxWidth: 400,
        margin: 10,
    },
    media: {
        height: 0,
        paddingTop: '30%',
    },
    actions: {
        display: 'flex',
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
});

export default styles;
