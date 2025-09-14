import { useFormik } from "formik";
import * as Yup from "yup";
import { TextField, Button, Box } from "@mui/material";
import api from "../api";

interface QuoteFormProps {
    productId: number;
}

export default function QuoteForm({ productId }: QuoteFormProps) {
    const formik = useFormik({
        initialValues: { name: "", email: "", phone: "", message: "" },
        validationSchema: Yup.object({
            name: Yup.string().required("Required"),
            email: Yup.string().email("Invalid email").required("Required"),
            phone: Yup.string().required("Required"),
        }),
        onSubmit: async (values, { resetForm }) => {
            try {
                await api.post("/enquiries", { ...values, productId });
                alert("Quote request sent successfully!");
                resetForm();
            } catch (err) {
                alert("Error sending quote. Check backend connection.");
            }
        },
    });

    return (
        <Box component="form" onSubmit={formik.handleSubmit} sx={{ mt: 2 }}>
            <TextField fullWidth label="Name" margin="normal"
                {...formik.getFieldProps("name")}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
            />
            <TextField fullWidth label="Email" margin="normal"
                {...formik.getFieldProps("email")}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
            />
            <TextField fullWidth label="Phone" margin="normal"
                {...formik.getFieldProps("phone")}
                error={formik.touched.phone && Boolean(formik.errors.phone)}
                helperText={formik.touched.phone && formik.errors.phone}
            />
            <TextField fullWidth label="Message" margin="normal" multiline rows={3}
                {...formik.getFieldProps("message")}
            />
            <Button type="submit" variant="contained" sx={{ mt: 2 }}>
                Request a Callback
            </Button>
        </Box>
    );
}
