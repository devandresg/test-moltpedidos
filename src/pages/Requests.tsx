import {
  Box,
  Button,
  Container,
  InputAdornment,
  List,
  ListItem,
  MenuItem,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import { Add, CloudDownloadOutlined, Search } from "@mui/icons-material";
import {
  DropDownButton,
  PrimaryButton,
  PrimaryOutlinedButton,
} from "../components/global/Buttons";
import {
  CustomBasicTable,
  CustomTable,
  PaginationComponent,
} from "../components/global/Tables";
import {
  sampleColumns,
  sampleColumnsDataXZona,
  sampleData,
  sampleDataXZona,
} from "../data/global/TableSampleData";
import { useState } from "react";

const RequestsPage: React.FC = () => {
  const [showReviewModel, setShowReviewModel] = useState(false);
  const [showDeclineModule, setShowDeclineModule] = useState(false);
  const [showViewMoule, setShowViewModule] = useState(false);
  const [showImportModule, setShowImportModule] = useState(false);
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [itemOnReview, setItemOnReview] = useState<number>(0);
  const [fileNames, setFileNames] = useState<string[]>([]);

  const handleFileSelect = (files: FileList | null) => {
    if (files) {
      const names = Array.from(files).map((file) => file.name);
      setFileNames(names);
    }
  };

  return (
    <>
      {/* Header */}
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "16px 0",
          maxWidth: "100% !important",
        }}
      >
        <Typography component="h1" variant="h5">
          Lista de pedidos
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: "20px",
          }}
        >
          {/* Dropdown 1 */}
          <DropDownButton label="Importar archivo">
            <MenuItem
              onClick={() => {
                setShowImportModule(true);
              }}
            >
              Archivo General
            </MenuItem>
            <MenuItem
              onClick={() => {
                setShowImportModule(true);
              }}
            >
              Archivo de dotación
            </MenuItem>
            <MenuItem
              onClick={() => {
                setShowImportModule(true);
              }}
            >
              Archivo de empleados
            </MenuItem>
          </DropDownButton>

          {/* Dropdown 2 */}
          <DropDownButton label="Exportar archivo">
            <MenuItem onClick={() => {}}>Opción A</MenuItem>
            <MenuItem onClick={() => {}}>Opción B</MenuItem>
            <MenuItem onClick={() => {}}>Opción C</MenuItem>
          </DropDownButton>

          {/* Nuevo Button */}
          <PrimaryButton label="Nuevo" startIcon={<Add />} />
        </Box>
      </Container>

      {/* Table */}
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "100% !important",
          margin: "30px 0",
          gap: "30px",
        }}
      >
        {/* Filter Options */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <OutlinedInput
            placeholder="Buscar"
            startAdornment={
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            }
            sx={{
              height: "40px",
              borderRadius: "15px",
              "& .MuiOutlinedInput-root": {
                borderRadius: "15px",
              },
            }}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: "20px",
            }}
          >
            <DropDownButton label="Filtrar">
              <MenuItem onClick={() => {}}>Opción A</MenuItem>
              <MenuItem onClick={() => {}}>Opción B</MenuItem>
              <MenuItem onClick={() => {}}>Opción C</MenuItem>
            </DropDownButton>
            <PrimaryOutlinedButton
              label="Revisar"
              onClick={() => {
                if (selectedItems.length > 0) setShowReviewModel(true);
                else alert("Debes seleccionar un pedido");
              }}
            />
          </Box>
        </Box>

        {/* Table Data */}
        <Box>
          <CustomTable
            columns={sampleColumns}
            data={sampleData}
            sortBy="fechaCreacion"
            orderDir="desc"
            actionOnClick={() => setShowViewModule(true)}
            selectedItems={setSelectedItems}
          />
          {/* Pagination*/}
          <Box
            sx={{
              display: "flex",
              justifyContent: "end",
            }}
          >
            <PaginationComponent
              currentPage={1}
              itemsPerPage={10}
              onPageChange={() => {}}
              totalItems={100}
            />
          </Box>
        </Box>
      </Container>
      {showReviewModel && selectedItems.length > 0 ? (
        <Container
          sx={{
            width: "100%",
            maxWidth: "100% !important",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            //display: "flex",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: "9999",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "black",
              opacity: "0.5",
            }}
          ></Box>
          <Box
            sx={{
              width: "100%",
              maxWidth: "650px",
              height: "100%",
              maxHeight: "700px",
              backgroundColor: "#EEEEEE",
              position: "relative",
              padding: "30px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              borderRadius: "15px",
            }}
          >
            <Button
              sx={{
                padding: 0,
                borderRadius: 50,
                minWidth: "20px",
                color: "text.primary",
                position: "absolute",
                top: 10,
                right: 10,
              }}
              onClick={() => setShowReviewModel(false)}
            >
              X
            </Button>

            {sampleData.map((item: any, index: number) =>
              index === itemOnReview ? (
                <>
                  <Typography component="h5" variant="h5">
                    Resumen de la orden Punto Virrey Norte
                  </Typography>

                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      padding: "20px",
                      gap: "20px",
                      margin: "20px",
                    }}
                  >
                    <Typography component="h5" variant="h5">
                      Cargo: {item.cargo}
                    </Typography>
                    <Typography component="span" variant="h5">
                      Roles: {item.rol}
                    </Typography>
                  </Box>
                  <CustomBasicTable
                    columns={sampleColumnsDataXZona}
                    data={item.items}
                    orderDir="desc"
                    sortBy="prenda"
                    selectedItems={() => {}}
                  />
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      margin: "20px",
                      gap: "20px",
                    }}
                  >
                    <Typography component="p" variant="subtitle1">
                      {index + 1} de {selectedItems.length}
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        gap: "20px",
                      }}
                    >
                      <PrimaryOutlinedButton
                        label="Rechazar"
                        onClick={() => setShowDeclineModule(true)}
                      />
                      <PrimaryButton
                        label="Aprobar"
                        onClick={() => {
                          if (index + 1 >= selectedItems.length) {
                            setShowReviewModel(false);
                            setItemOnReview(0);
                          } else setItemOnReview(index + 1);
                        }}
                      />
                    </Box>
                  </Box>
                </>
              ) : (
                <></>
              ),
            )}
          </Box>
        </Container>
      ) : (
        <></>
      )}
      {showDeclineModule ? (
        <Container
          sx={{
            width: "100%",
            maxWidth: "100% !important",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: "9999",
          }}
        >
          <Box
            sx={{
              width: "100%",
              maxWidth: "650px",
              height: "100%",
              maxHeight: "700px",
              backgroundColor: "#EEEEEE",
              position: "relative",
              padding: "30px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              borderRadius: "15px",
            }}
          >
            <Button
              sx={{
                padding: 0,
                borderRadius: 50,
                minWidth: "20px",
                color: "text.primary",
                position: "absolute",
                top: 10,
                right: 10,
              }}
              onClick={() => setShowDeclineModule(false)}
            >
              X
            </Button>

            <Typography component="h5" variant="h5">
              Resumen de la orden Punto Virrey Norte
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                padding: "20px",
                gap: "20px",
                margin: "20px",
              }}
            >
              <Typography component="h5" variant="h5">
                Cargo: {sampleData[itemOnReview].cargo}
              </Typography>
              <Typography component="span" variant="h5">
                Roles: {sampleData[itemOnReview].rol}
              </Typography>
            </Box>
            <TextField
              label="Descripción"
              sx={{
                backgroundColor: "white",
                borderRadius: "5px",
              }}
              multiline
              rows={10} // Para establecer un tamaño inicial
              variant="outlined" // Asegura que tenga un borde claro
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                margin: "20px",
                gap: "20px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  gap: "20px",
                }}
              >
                <PrimaryOutlinedButton
                  label="Cerrar"
                  onClick={() => setShowDeclineModule(false)}
                />
                <PrimaryButton
                  label="Confirmar"
                  onClick={() => {
                    if (itemOnReview + 1 >= selectedItems.length) {
                      setShowDeclineModule(false);
                      setShowReviewModel(false);
                      setItemOnReview(0);
                    } else {
                      setShowDeclineModule(false);
                      setItemOnReview(itemOnReview + 1);
                    }
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Container>
      ) : (
        <></>
      )}
      {showViewMoule ? (
        <Container
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
            backgroundColor: "#EEEEEE",
            width: "100%",
            maxWidth: "550px !important",
            height: "100%",
            display: "flex",
          }}
        >
          <Button
            sx={{
              padding: 0,
              borderRadius: 50,
              minWidth: "20px",
              color: "text.primary",
              position: "absolute",
              top: 10,
              right: 10,
            }}
            onClick={() => setShowViewModule(false)}
          >
            X
          </Button>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              width: "100%",
            }}
          >
            <Box
              sx={{ display: "flex", flexDirection: "column", padding: "20px" }}
            >
              <Typography
                component="span"
                variant="h5"
                color="#A15EFB"
                fontWeight="bold"
              >
                Orden ID:
                <Typography component="span" variant="h6" color="text.primary">
                  45112215
                </Typography>
              </Typography>
              <Typography
                component="p"
                variant="subtitle1"
                color="text.secondary"
              >
                Información general
              </Typography>
              <Typography component="p" variant="subtitle1" fontWeight="bold">
                Cargo: Cocina
              </Typography>
              <Typography component="p" variant="subtitle1" fontWeight="bold">
                Rol: Jefe de cocina
              </Typography>
            </Box>

            <Box
              sx={{
                width: "100%",
                height: "100%",
                overflow: "auto",
              }}
            >
              <List>
                {sampleDataXZona[0].items.map((item) => (
                  <ListItem
                    sx={{
                      borderBottom: "solid 1px lightgray",
                      backgroundColor: "#EAEAEA",
                    }}
                  >
                    <Box
                      sx={{
                        width: "100%",
                        height: "120px",
                        display: "flex",
                        BorderBottom: "solid 1px black",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "20px",
                      }}
                    >
                      <Box
                        sx={{
                          width: "40px",
                          height: "40px",
                          backgroundColor: "white",
                        }}
                      ></Box>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                        }}
                      >
                        <Typography component="span" variant="body1">
                          {item.prenda}
                        </Typography>
                        <Typography
                          component="span"
                          variant="body1"
                          color="text.secondary"
                        >
                          Talla {item.talla}
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                        }}
                      >
                        <Typography component="span" variant="body1">
                          Cantidades
                        </Typography>
                        <Typography
                          component="span"
                          variant="body1"
                          color="text.secondary"
                        >
                          {item.cantidad}
                        </Typography>
                      </Box>
                    </Box>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Box>
        </Container>
      ) : (
        <></>
      )}

      {showImportModule ? (
        <Container
          sx={{
            width: "100%",
            maxWidth: "100% !important",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: "9999",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "black",
              opacity: "0.5",
            }}
          ></Box>
          <Box
            sx={{
              width: "100%",
              maxWidth: "480px",
              height: "100%",
              maxHeight: "370px",
              backgroundColor: "#EEEEEE",
              position: "relative",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              borderRadius: "15px",
              gap: "20px",
            }}
          >
            {/* Drag-and-Drop Area */}
            <Box
              onDragOver={(e) => e.preventDefault()} // Prevent default to allow drop
              onDrop={(e) => {
                e.preventDefault(); // Prevent default behavior
                const files = e.dataTransfer.files;
                handleFileSelect(files);
              }}
              onClick={() => document.getElementById("fileInput")?.click()} // Open file explorer
              sx={{
                width: "100%",
                height: "100%",
                backgroundColor: "white",
                border: "2px dashed lightgray",
                borderRadius: "15px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: "#F5F5F5",
                },
              }}
            >
              <CloudDownloadOutlined
                sx={{
                  width: "50%",
                  height: "50%",
                  color: "#9747FF",
                }}
              />
              <Typography variant="body2" color="textSecondary">
                Arrastra y suelta tus archivos aquí o haz clic para
                seleccionarlos
              </Typography>
              <input
                id="fileInput"
                type="file"
                multiple
                style={{ display: "none" }} // Hide the input
                onChange={(e) => handleFileSelect(e.target.files)}
              />
            </Box>

            {/* File List */}
            <Box
              sx={{
                marginTop: "10px",
                maxHeight: "120px",
                overflowY: "auto",
              }}
            >
              {fileNames.map((fileName, index) => (
                <Typography key={index} variant="body2" color="textSecondary">
                  {fileName}
                </Typography>
              ))}
            </Box>

            {/* Action Buttons */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "20px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  gap: "20px",
                }}
              >
                <PrimaryOutlinedButton
                  label="Cancelar"
                  onClick={() => {
                    setShowImportModule(false);
                    setFileNames([]); // Clear selected files
                  }}
                />
                <PrimaryButton
                  label="Subir archivo"
                  onClick={() => console.log("Archivos subidos:", fileNames)}
                />
              </Box>
            </Box>
          </Box>
        </Container>
      ) : null}
    </>
  );
};

export default RequestsPage;
