// MUI
import Card, { CardProps } from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

// Custom Card Component
export default function ResumeCard({ children, sx, ...props }: CardProps) {
  return (
    <Card {...props} sx={{ borderRadius: 3, boxShadow: 3, ...sx }}>
      <CardContent>{children}</CardContent>
    </Card>
  );
}
