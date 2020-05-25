import React from 'react';
import "./css.css";

export default function Page404() {
    // https://codepen.io/amanjotsuccessive/pen/LYpvYMj
    return (
        <div class="ag-page-404">
            <div class="ag-toaster-wrap">
                <div class="ag-toaster">
                    <div class="ag-toaster_back"></div>
                    <div class="ag-toaster_front">
                        <div class="js-toaster_lever ag-toaster_lever"></div>
                    </div>
                    <div class="ag-toaster_toast-handler">
                        <div class="ag-toaster_shadow"></div>
                        <div class="js-toaster_toast ag-toaster_toast js-ag-hide"></div>
                    </div>
                </div>

                <canvas id="canvas-404" class="ag-canvas-404"></canvas>
            </div>
        </div>
    )
}
