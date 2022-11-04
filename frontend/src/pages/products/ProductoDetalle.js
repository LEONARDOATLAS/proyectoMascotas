import React from "react";
import ContentHeader from "../../components/ContentHeard";
import Footer from "../../components/Footer";
import Narbar from "../../components/Narvar";
import SidebarContainer from "../../components/SidebarContainer";

import "../css/productos.css"

const ProductoDetalle = () => {

  return (
    <div className="wrapper">
      <Narbar></Narbar>
      <SidebarContainer></SidebarContainer>

      {/* INICIO DEL CONTENIDO DE LA PAGINA  */}
      <div className="content-wrapper">
        <ContentHeader
          titulo={"Detalle Producto"}
          breadCrumb1={"Productos"}
          breadCrumb2={"Agregar"}
          ruta={"/productos"}
        />

        {/* INICIO CONTENIDO INTERNO DE LA PAGINA  */}

        <section className="content">

          <div className="card card-solid">
            <div className="card-body">
              <div className="row">
                  <div className="col-12 col-sm-6">
                    <h3 className="d-inline-block d-sm-none">Pruina DOG CHOW</h3>
                    <div className="col-12 imagen_producto">
                      <img src="dist/img/products/purina.png" className="product-image" alt="" />
                    </div>
                </div>

                  <div className="col-12 col-sm-6">
                    <h3 className="my-3">Purina DOG CHOW</h3>
                    <p>Maíz, Harina de subproductos de pollo, Harina de carne y hueso, Arroz partido, Harina de soya, Grasa animal y/o aceite vegetal estabilizado con antioxidantes (BHT), Trigo, Harina de gluten de maíz, Digesto animal, Inulina, Fibra de soya, Carbonato de Calcio, Fosfato bicálcico, Sal, Zeolita, Arveja deshidratada.</p>
                    <hr />
                    <h4>Disponible en bolsa de Color</h4>
                    <div className="btn-group btn-group-toggle" data-toggle="buttons">
                      <label className="btn btn-default text-center active">
                        <input type="radio" name="color_option" id="color_option_a1" autoComplete="off" defaultChecked />
                        Green
                        <br />
                        <i className="fas fa-circle fa-2x text-green" />
                      </label>
                    </div>
                    <h4 className="mt-3">Tamaños</h4>
                    <div className="btn-group btn-group-toggle" data-toggle="buttons">
                      <label className="btn btn-default text-center">
                        <input type="radio" name="color_option" id="color_option_b1" autoComplete="off" />
                        <span className="text-xl">500 Gr</span>
                        <br />
                        Grande
                      </label>
                    </div>
                    <div className="bg-gray py-2 px-3 mt-4">
                      <h2 className="mb-0">
                        $1500.00
                      </h2>
                      <h4 className="mt-0">
                        <small>Descuentos: $80.00 </small>
                      </h4>
                    </div>
                    <div className="mt-4">
                    </div>
                  </div>


              </div>

              <div className="row mt-4">
                <nav className="w-100">
                  <div className="nav nav-tabs" id="product-tab" role="tablist">
                    <a className="nav-item nav-link active" id="product-desc-tab" data-toggle="tab" href="#product-desc" role="tab" aria-controls="product-desc" aria-selected="true">Descripción</a>
                    <a className="nav-item nav-link" id="product-comments-tab" data-toggle="tab" href="#product-comments" role="tab" aria-controls="product-comments" aria-selected="false">Comentarios</a>
                    <a className="nav-item nav-link" id="product-rating-tab" data-toggle="tab" href="#product-rating" role="tab" aria-controls="product-rating" aria-selected="false">Clasificación</a>
                  </div>
                </nav>
                <div className="tab-content p-3" id="nav-tabContent">
                  <div className="tab-pane fade show active" id="product-desc" role="tabpanel" aria-labelledby="product-desc-tab"> Maíz, Harina de subproductos de pollo, Harina de carne y hueso, Arroz partido, Harina de soya, Grasa animal y/o aceite vegetal estabilizado con antioxidantes (BHT), Trigo, Harina de gluten de maíz, Digesto animal, Inulina, Fibra de soya, Carbonato de Calcio, Fosfato bicálcico, Sal, Zeolita, Arveja deshidratada, Zanahoria deshidratada, Taurina, L-LisinaCloruro de colina, Cloruro de potasio, Colores artificiales (Rojo # 40, Amarillo # 5, Amarillo # 6, Azul # 2), Dióxido de titanio, Metionina, Sulfato de zinc, Proteinato de zinc, Sulfato ferroso, Suplementos vitamínicos (A, D-3, E, B-12), Sulfato de manganeso, Proteinato de manganeso, Niacina, Pantotenato de calcio, Suplemento de riboflavina, Clorhidrato de piridoxina, Sulfato de cobre, Proteinato de cobre, Mononitrato de tiamina, Ácido fólico, Iodato de calcio, Selenito de sodio- </div>
                  <div className="tab-pane fade" id="product-comments" role="tabpanel" aria-labelledby="product-comments-tab"> Vivamus rhoncus nisl sed venenatis luctus. Sed condimentum risus ut tortor feugiat laoreet. Suspendisse potenti. Donec et finibus sem, ut commodo lectus. Cras eget neque dignissim, placerat orci interdum, venenatis odio. Nulla turpis elit, consequat eu eros ac, consectetur fringilla urna. Duis gravida ex pulvinar mauris ornare, eget porttitor enim vulputate. Mauris hendrerit, massa nec aliquam cursus, ex elit euismod lorem, vehicula rhoncus nisl dui sit amet eros. Nulla turpis lorem, dignissim a sapien eget, ultrices venenatis dolor. Curabitur vel turpis at magna elementum hendrerit vel id dui. Curabitur a ex ullamcorper, ornare velit vel, tincidunt ipsum. </div>
                  <div className="tab-pane fade" id="product-rating" role="tabpanel" aria-labelledby="product-rating-tab"> Cras ut ipsum ornare, aliquam ipsum non, posuere elit. In hac habitasse platea dictumst. Aenean elementum leo augue, id fermentum risus efficitur vel. Nulla iaculis malesuada scelerisque. Praesent vel ipsum felis. Ut molestie, purus aliquam placerat sollicitudin, mi ligula euismod neque, non bibendum nibh neque et erat. Etiam dignissim aliquam ligula, aliquet feugiat nibh rhoncus ut. Aliquam efficitur lacinia lacinia. Morbi ac molestie lectus, vitae hendrerit nisl. Nullam metus odio, malesuada in vehicula at, consectetur nec justo. Quisque suscipit odio velit, at accumsan urna vestibulum a. Proin dictum, urna ut varius consectetur, sapien justo porta lectus, at mollis nisi orci et nulla. Donec pellentesque tortor vel nisl commodo ullamcorper. Donec varius massa at semper posuere. Integer finibus orci vitae vehicula placerat. </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* FIN CONTENIDO INTERNO DE LA PAGINA  */}
      </div>
      {/* FIN DEL CONTENIDO DE LA PAGINA  */}

      <Footer></Footer>
    </div>
  );
};

export default ProductoDetalle;
