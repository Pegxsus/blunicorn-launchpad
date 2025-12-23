import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";

interface BookCallDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const BookCallDialog = ({ open, onOpenChange }: BookCallDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl h-[85vh] p-0 bg-background border-border overflow-hidden">
        <DialogTitle className="sr-only">Book a Discovery Call</DialogTitle>
        <iframe
          src="https://cal.com/hellopaul/discovery-call-with-paul?embed=true&theme=dark"
          className="w-full h-full border-0"
          title="Book a Discovery Call"
        />
      </DialogContent>
    </Dialog>
  );
};

export default BookCallDialog;
