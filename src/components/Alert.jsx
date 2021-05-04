import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Typography,
} from '@material-ui/core';

export default function ResponsiveDialog({ isOpen, handleClick }) {
    return (
        <>
            <Dialog open={isOpen} onClose={handleClick} aria-labelledby="responsive-dialog-title">
                <DialogTitle id="responsive-dialog-title">ইনফরমেটিভ কোডিং মোবাইল এপপ্স</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        ইনফরমেটিভ কোডিং এর মোবাইল এপপ্স এখনো ডেভেলপমেন্ট চলছে। আশা করা যায় আইওএস এবং
                        এন্ড্রোইড এর জন্য খুব শিগ্রই চলে আসবে। ধন্যবাদ।
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button variant="outlined" onClick={handleClick} color="primary" autoFocus>
                        <Typography variant="subtitle1" color="primary">
                            বন্ধ করুন
                        </Typography>
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}
