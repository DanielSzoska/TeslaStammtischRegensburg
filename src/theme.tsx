import CssBaseline from "@mui/material/CssBaseline"
import { deDE as locales } from "@mui/material/locale"
import { createTheme, ThemeOptions, ThemeProvider } from "@mui/material/styles"
import { PropsWithChildren } from "react"


const options: ThemeOptions = {
	palette: {
		mode: "dark",
		primary: {
			main: "#ff1744",
			contrastText: "#ffffff"
		},
		secondary: {
			main: "#ff4081",
			contrastText: "#ffffff"
		},
		background: {
			default: "#121212",
			paper: "#1f1f1f"
		},
		text: {
			primary: "#f0f0f0",
			secondary: "#bfbfbf"
		}
	},
	components: {
		MuiCssBaseline: {
			styleOverrides: {
				html: {
					height: "100vh !important",
					width: "100vw !important",
					overflowX: "hidden",
					overflowY: "auto !important"
				},
				body: {
					height: "100vh !important",
					width: "100vw !important",
					overflowX: "hidden",
					overflowY: "auto !important",
					backgroundColor: "#ffffff !important",
					"&::before": {
						zIndex: -1000,
						content: `""`,
						position: "fixed",
						backgroundImage: `url("/background.jpg");`,
						background: `image-set(
                            url("/background.avif") type("image/avif"),
                            url("/background.webp") type("image/webp"),
                            url("/background.jpg") type("image/jpeg")
                        );`,
						backgroundRepeat: "no-repeat",
						backgroundAttachment: "fixed",
						backgroundPosition: "center center",
						backgroundSize: "cover",
						opacity: 0.4,
						top: 0,
						bottom: 0,
						left: 0,
						right: 0
					}
				},
				"#root": {
					height: "100vh !important",
					width: "100vw !important",
					overflowX: "hidden",
					overflowY: "auto !important",
					display: "flex",
					flexDirection: "column"
				},
				"#header": {
					position: "relative",
					zIndex: 100
				},
				"#content": {
					flex: 1,
					paddingTop: "40px !important",
					paddingBottom: "40px !important"
				},
				img: {
					pointerEvents: "none",
					userSelect: "none",
					userDrag: "none"
				}
			}
		},
		MuiUseMediaQuery: {
			defaultProps: {
				noSsr: true
			}
		},
		MuiPaper: {
			defaultProps: {
				elevation: 4
			},
			styleOverrides: {
				root: {
					padding: "1.5rem"
				}
			}
		},
		MuiTextField: {
			variants: [
				{
					props: { disabled: true },
					style: {
						"& .Mui-disabled": {
							WebkitTextFillColor: "rgba(0, 0, 0, 1)",
							color: "rgba(0, 0, 0, 1)"
						}
					}
				}
			]
		},
		MuiInput: {
			variants: [
				{
					props: { disabled: true },
					style: {
						"& .Mui-disabled": {
							WebkitTextFillColor: "rgba(0, 0, 0, 1)",
							color: "rgba(0, 0, 0, 1)"
						}
					}
				}
			]
		},
		MuiButton: {
			defaultProps: {
				variant: "contained",
				color: "primary",
				size: "small"
			},
			styleOverrides: {
				root: {
					":hover": {
						color: "white"
					}
				}
			}
		},
		MuiStack: {
			defaultProps: {
				direction: "column",
				spacing: 2
			}
		},
		MuiAppBar: {
			defaultProps: {
				position: "relative"
			},
			styleOverrides: {
				root: {
					minHeight: "0 !important",
					paddingTop: "10px",
					paddingBottom: "10px"
				}
			}
		},
		MuiToolbar: {
			styleOverrides: {
				root: {
					minHeight: "0 !important",
					paddingTop: "4px",
					paddingBottom: "4px"
				}
			}
		}
	}
}

const THEME = createTheme(options, locales)

export default function ({ children }: PropsWithChildren) {
	return (
		<ThemeProvider theme={THEME}>
			<CssBaseline enableColorScheme />
			{children}
		</ThemeProvider>
	)
}
