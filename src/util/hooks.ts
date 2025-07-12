import useMediaQuery from "@mui/material/useMediaQuery"


export const useTabletViewport = () => useMediaQuery("(max-width: 900px)")

export const useHandyViewport = () => useMediaQuery("(max-width: 599.95px)")
