# Single Value Mappers

 In this tutorial, you will use the **mapper to convert a GTS containing prices in euro in dollars on a wrapped GTS.**

## MAP parameters

The **MAP** framework allows you to **apply a function on values of a Geo Time SeriesTM** that fall into a sliding window.

Map takes as input **a list of parameters**:
* **one or several lists of GTS**
* The **mapper function**.
* the **width of the sliding window before** the value
* the **width of the sliding window after** the value
* The **last element** corresponds to "**occurences**" which is the limit of computation of a number.

For all elements except the set of GTS and the mapper function a default value 0 can be used, when those elements aren't required.

## Convert the fuel prices from euro to dollars

On the 30 of november the rates between euro and dollar was **one euro equals 1.057 dollars**. To convert our prices in euro to dollar we have to **divide all of our price by 1.057**. As there is no mapper to divide value in WarpScpript, the [mapper.mul](http://www.warp10.io/reference/frameworks/mapper_mul/) will be used. This mapper is a **single value mapper, which means that it can't have a sliding window**. **Put 0 for each elements corresponding to the sliding window paramaters**. This mapper takes the number to multiply all values as a parameter between the set of GTS and the mapper function.

## Solution

```
// Open the parameter list for the MAP framework
[

	// Wrap of the set of GTS
	'["60VFO54oNHtaSLKgAaOmNLtYOGg4X.CkQr.0JV8dO.VmDI7kB2.lC.GoTM0_0aSWTaxgOFFiNM0k3M0mPMWZOMCYNM8XSM8WQbGn.aCk0I7tBY.k4V.L.0g..0P.VEQfqj9H0GP.VAjSVkJLPXN.54VUXkV.........yyA.k9fRM0flV54fkLTQd6jtCyozzEqwnMMWuNZ02FqvvnPnIc6HxWy_tiwfDv348Zu7GiWnbhf7db9ML6q3nHEC6TIH.EvIZrVP.F..4YkG..","60VFO54oNHtaSLKgAaOmNLtYOGg4X.CkQr.0JV8dO.VmDI7mD2.kBFGoTM0_0aSWTaxgOFFiNM0k3M0mPMWZOMCYNM8XSM8WQbGn.aCk0I7tBY.k4V.L.0g..0P.VEQfqj9H0GP.VAjSVkJLP1N.56NUXkV.........yyA.k9fRM0flV54fkJz5qkaqYyozU4ntyr_DxwH.WcQSSthOoTZdJCfycxIwULJbhW0LtnmpZJr_AePsJCvoMjzv12uMQR6XuplkzcT6vih3eWsXt7r0.CBRX2u1vX2VAr8d.3YUok01.F..4YkG..","60VFO54oNHtaSLKgAaOmNLtYOGg4X.CkQr.0JV8dO.VmDIFsB2.kBFGoTM0_0aSWTaxgOFFiNM0k3M0mPMWZOMCYNM8XSM8WQbGn.aCk0I7tC2Vk4V.L.0g..0P.VEQfqj9H0GP.VAjSVkJLP1N.563UXkV.........yyA.k9fRM0flV54fkTU9BBPL.jgE8vONGVVZIF_cPCWxhtbKzgE6_QyUtrGEWEAGPNHuhlBnXYNckEZUdTQj9nil0ORykiNxS4wbJjJFFzkY_qr0sihRl8i2rzqZoV..YJkxBV3..0Nw3F.","60VFO54oNHtaSLKgAaOmNLtYOGg4X.CkQr.0JV8dO.VmDIVkB2.kC.GoTM0_0aSWTaxgOFFiNM0k3M0mPMWZOMCYNM8XSM8WQbGn.aCk0I7tD2.k4V.L.0g..0P.VEQfqj9H0GP.VAjSVkJLT1N.543UXkV.........yyA.k9fRM0flV54fkQy.T8wVKziEn_BQqKIiIVlcPCWxhtaKrjFJ95rzZRiqNE4pAdApUUXswjUnb5tmvFR.5RYr9G70...LE03.","60VFO54oNHtaSLKgAaOmNLtYOGg4X.CkQr.0JV8dO.VmDI7kB2.kDFGoTM0_0aSWTaxgOFFiNM0k3M0mPMWZOMCYNM8XSM8WQbGn.aCk0I7tBY.k4V.L.0g..0P.VEQfqj9H0GP.VAjSVkJLK1N.54gUXkV.........yyA.k9fRM0flV54fkLTCWmZUjhhzQ8MQ3UXuSJd.FwEiiwqgxWybCf9drCLU1DLYokWptqu9hLgnsK869ldWUourBx1dp27M.3IAg.wP.F..4YkG..","60VFO54oNHtaSLKgAaOmNLtYOGg4X.CkQr.0JV8dO.VmDI7kB2.lCFGoTM0_0aSWTaxgOFFiNM0k3M0mPMWZOMCYNM8XSM8WQbGn.aCk0I7tBY.k4V.L.0g..0P.VEQfqj9H0GP.VAjSVkJLTXN.57s06sg7.........EjXkB1er4kPwN0WPw5bDqUa12qlzmVpUpzOXHpI.WcPShxhOfMz98FrjSUzzZFc6oNYtCKTK_ntykM0pkROR08SEPNytuaCQ1fr3Ek7VHIUHtxkawh_Lv2sDWSiwx2SnGU57Y5t44ozQb_1zaGIiPgjhF1rUG0tMEt5dk4NK9geTV3..0Nw3F.","60VFO54oNHtaSLKgAaOmNLtYOGg4X.CkQr.0JV8dO.VmDI7kB2.kBFGoTM0_0aSWTaxgOFFiNM0k3M0mPMWZOMCYNM8XSM8WQbGn.aCk0I7tBY.k4V.L.0g..0P.VEQfqj9H0GP.VAjSVkJLP1N.56wUXkV.........yyA.k9fRM0flV54fkTTT.t5fhDkzbCWX5H5FC1LVcL6rrLOLykwUKztybhBx3Rd6dy6eEZfCrpSqNVhWSRtI5x_Jva99wsLlH3kiFSYvo6qSHCK2W2mMQR6XupmNyiGq0Ati_HCcAk4zZ3g2.4IOiwd1.F..4YkG..","60VFO54oNHtaSLKgAaOmNLtYOGg4X.CkQr.0JV8dO.VmDI7kB2.kC.GoTM0_0aSWTaxgOFFiNM0k3M0mPMWZOMCYNM8XSM8WQbGn.aCk0I7tBY.k4V.L.0g..0P.VEQfqj9H0GP.VAjSVkJLT1N.54cUXkV.........yyA.k9fRM0flV54fkPUwzNoITyoz9WmOjUGlmBH.WcQSSthOmPLbF5bvYwtI5x_Jva99LuS3mPnWk0HMafyjvBFLHiqb_.N.4krxi0c0...LE03.","60VFO54oNHtaSLKgAaOmNLtYOGg4X.CkQr.0JV8dO.VmDIFtB2.kBVGoTM0_0aSWTaxgOFFiNM0k3M0mPMWZOMCYNM8XSM8WQbGn.aCk0I7tC2Zk4V.L.0g..0P.VEQfqj9H0GP.VAjSVkJLTXN.58R06sg7.........EjXkB1er4kPwN0WPw6Ea4L5hLjgEofCrpSqNgiJV7P5rMTQLTozgebRpOSPVD1fjPmswjUAG1VU7PsEobVHkOyNJQG0sHWB6POuZEHGDTYmaDcH62jCjNz2yGyDn4vuDEV6QjMPI2mTiy7klRMPVI8TuEv1OIy5zVwUKztybhDCQWsWzF2gOLiCNV3..0Nw3F.","60VFO54oNHtaSLKgAaOmNLtYOGg4X.CkQr.0JV8dO.VmDI7kB2.lB.GoTM0_0aSWTaxgOFFiNM0k3M0mPMWZOMCYNM8XSM8WQbGn.aCk0I7tBY.k4V.L.0g..0P.VEQfqj9H0GP.VAjSVkJLPXN.53RUXkV.........yyA.k9fRM0flV54fkTSierDE4DozDZxhO4DtDn5VcL6rrLOLPhCIcAIxltliZ3qogcSJ5V.z8gXh1V3..0Nw3F.","60VFO54oNHtaSLKgAaOmNLtYOGg4X.CkQr.0JV8dO.VmDI7kB2.lCkGoTM0_0aSWTaxgOFFiNM0k3M0mPMWZOMCYNM8XSM8WQbGn.aCk0I7tBY.k4V.L.0g..0P.VEQfqj9H0GP.VAjSVkJLTXN.58706sg7.........EjXkB1er4kPwN0WPw5bDyS3TvrgEofCrpSqNgiJV7P5rMTQLTozwcLlH3kibFY_kqX3jCfAXXhzjm2syX.2Ie9flxIbEALGITJTVWwWZDGvuGCiRv_g1lOUtw8h6gHSiCIYKXTJCvrMzntiRx_JvidAAH2cbkxzEqxnMMVP_nc.cSmWqac0...LE03.","60VFO54oNHtaSLKgAaOmNLtYOGg4X.CkQr.0JV8dO.VmDI7kB2.lCVGoTM0_0aSWTaxgOFFiNM0k3M0mPMWZOMCYNM8XSM8WQbGn.aCk0I7tBY.k4V.L.0g..0P.VEQfqj9H0GP.VAjSVkJLTXN.58B06sg7.........EjXkB1er4kPwN0WPw4buUehvj6q6uMavmgvgLKXF3E2vfjCf4DVhEp6yter3nD93MlxZB9I1Asl512spX_GBagsNDOVadUVq5biUGn00mgrFj.nXYNc68a28ay7s3R78E_TycGiEeNxn_BQqKIi7jWeAmiizEq1HlyaUhIk78J5.00Au1xX.F..4YkG..","60VFO54oNHtaSLKgAaOmNLtYOGg4X.CkQr.0JV8dO.VmDI7kB2.kBVGoTM0_0aSWTaxgOFFiNM0k3M0mPMWZOMCYNM8XSM8WQbGn.aCk0I7tBY.k4V.L.0g..0P.VEQfqj9H0GP.VAjSVkJLO1N.54cUXkV.........yyA.k9fRM0flV54fkPTA8uUN4C_zyAYmxzDRvcZ02FqvvnPnIc6HxWy_tiwfDv348csdvnmpZJr_AfcwgIFWTsYLYyOyHaZ.A_XQ7170...LE03.","60VFO54oNHtaSLKgAaOmNLtYOGg4X.CkQr.0JV8dO.VmDIVqB2.kBkGoTM0_0aSWTaxgOFFiNM0k3M0mPMWZOMCYNM8XSM8WQbGn.aCk0I7tD2Nk4V.L.0g..0P.VEQfqj9H0GP.VAjSVkJLT1N.54.UXkV.........yyA.k9fRM0flV54fkTzgTKpxYyozHgrUKrOXmwH.WcQSSthORS4IcAIxGyTdYLkeSkaddnPCg8wsxl8A.k01SF_63V3..0Nw3F.","60VFO54oNHtaSLKgAaOmNLtYOGg4X.CkQr.0JV8dO.VmDI7kB2.kD.GoTM0_0aSWTaxgOFFiNM0k3M0mPMWZOMCYNM8XSM8WQbGn.aCk0I7tBY.k4V.L.0g..0P.VEQfqj9H0GP.VAjSVkJLR1N.55ZUXkV.........yyA.k9fRM0flV54fkHRbzhpUAhhzyAYmxzDRvcZ02FqvvnPnchCIcAIxGubtywdDQB5_2_DxwxG5CdLvaD81TSCvzTwYy4mq0NijRl3m4uRx0ClEAVo.Kj1c8Xc0...LE03.","60VFO54oNHtaSLKgAaOmNLtYOGg4X.CkQr.0JV8dO.VmDIVqB2.kBVGoTM0_0aSWTaxgOFFiNM0k3M0mPMWZOMCYNM8XSM8WQbGn.aCk0I7tD2Nk4V.L.0g..0P.VEQfqj9H0GP.VAjSVkJLT1N.54.UXkV.........yyA.k9fRM0flV54fkTxnYIgoAh_z_8ezfyn3_cZ02FqvvnPnchCIcAIxGyTdYLkeSr5dcnLCR.Syxt89.k22u_oc3V3..0Nw3F."]'

	// Convert JSON string to a WarpScript List
	JSON->

	// UNWRAP those GTS
	UNWRAP

	// Compute the conversion in dollar
	// Parameter value for the function mul
	1 1.057 /					
	mapper.mul 				// Mapper function mul
	0 								// Pre takes NO value before in the sliding window
	0 								// Post takes NO value after in the sliding window
	0 								// 0 occurences
] MAP
```

~~~
// Open the parameter list for the MAP framework
[

// Wrap of the set of GTS
'["60VFO54oNHtaSLKgAaOmNLtYOGg4X.CkQr.0JV8dO.VmDI7kB2.lC.GoTM0_0aSWTaxgOFFiNM0k3M0mPMWZOMCYNM8XSM8WQbGn.aCk0I7tBY.k4V.L.0g..0P.VEQfqj9H0GP.VAjSVkJLPXN.54VUXkV.........yyA.k9fRM0flV54fkLTQd6jtCyozzEqwnMMWuNZ02FqvvnPnIc6HxWy_tiwfDv348Zu7GiWnbhf7db9ML6q3nHEC6TIH.EvIZrVP.F..4YkG..","60VFO54oNHtaSLKgAaOmNLtYOGg4X.CkQr.0JV8dO.VmDI7mD2.kBFGoTM0_0aSWTaxgOFFiNM0k3M0mPMWZOMCYNM8XSM8WQbGn.aCk0I7tBY.k4V.L.0g..0P.VEQfqj9H0GP.VAjSVkJLP1N.56NUXkV.........yyA.k9fRM0flV54fkJz5qkaqYyozU4ntyr_DxwH.WcQSSthOoTZdJCfycxIwULJbhW0LtnmpZJr_AePsJCvoMjzv12uMQR6XuplkzcT6vih3eWsXt7r0.CBRX2u1vX2VAr8d.3YUok01.F..4YkG..","60VFO54oNHtaSLKgAaOmNLtYOGg4X.CkQr.0JV8dO.VmDIFsB2.kBFGoTM0_0aSWTaxgOFFiNM0k3M0mPMWZOMCYNM8XSM8WQbGn.aCk0I7tC2Vk4V.L.0g..0P.VEQfqj9H0GP.VAjSVkJLP1N.563UXkV.........yyA.k9fRM0flV54fkTU9BBPL.jgE8vONGVVZIF_cPCWxhtbKzgE6_QyUtrGEWEAGPNHuhlBnXYNckEZUdTQj9nil0ORykiNxS4wbJjJFFzkY_qr0sihRl8i2rzqZoV..YJkxBV3..0Nw3F.","60VFO54oNHtaSLKgAaOmNLtYOGg4X.CkQr.0JV8dO.VmDIVkB2.kC.GoTM0_0aSWTaxgOFFiNM0k3M0mPMWZOMCYNM8XSM8WQbGn.aCk0I7tD2.k4V.L.0g..0P.VEQfqj9H0GP.VAjSVkJLT1N.543UXkV.........yyA.k9fRM0flV54fkQy.T8wVKziEn_BQqKIiIVlcPCWxhtaKrjFJ95rzZRiqNE4pAdApUUXswjUnb5tmvFR.5RYr9G70...LE03.","60VFO54oNHtaSLKgAaOmNLtYOGg4X.CkQr.0JV8dO.VmDI7kB2.kDFGoTM0_0aSWTaxgOFFiNM0k3M0mPMWZOMCYNM8XSM8WQbGn.aCk0I7tBY.k4V.L.0g..0P.VEQfqj9H0GP.VAjSVkJLK1N.54gUXkV.........yyA.k9fRM0flV54fkLTCWmZUjhhzQ8MQ3UXuSJd.FwEiiwqgxWybCf9drCLU1DLYokWptqu9hLgnsK869ldWUourBx1dp27M.3IAg.wP.F..4YkG..","60VFO54oNHtaSLKgAaOmNLtYOGg4X.CkQr.0JV8dO.VmDI7kB2.lCFGoTM0_0aSWTaxgOFFiNM0k3M0mPMWZOMCYNM8XSM8WQbGn.aCk0I7tBY.k4V.L.0g..0P.VEQfqj9H0GP.VAjSVkJLTXN.57s06sg7.........EjXkB1er4kPwN0WPw5bDqUa12qlzmVpUpzOXHpI.WcPShxhOfMz98FrjSUzzZFc6oNYtCKTK_ntykM0pkROR08SEPNytuaCQ1fr3Ek7VHIUHtxkawh_Lv2sDWSiwx2SnGU57Y5t44ozQb_1zaGIiPgjhF1rUG0tMEt5dk4NK9geTV3..0Nw3F.","60VFO54oNHtaSLKgAaOmNLtYOGg4X.CkQr.0JV8dO.VmDI7kB2.kBFGoTM0_0aSWTaxgOFFiNM0k3M0mPMWZOMCYNM8XSM8WQbGn.aCk0I7tBY.k4V.L.0g..0P.VEQfqj9H0GP.VAjSVkJLP1N.56wUXkV.........yyA.k9fRM0flV54fkTTT.t5fhDkzbCWX5H5FC1LVcL6rrLOLykwUKztybhBx3Rd6dy6eEZfCrpSqNVhWSRtI5x_Jva99wsLlH3kiFSYvo6qSHCK2W2mMQR6XupmNyiGq0Ati_HCcAk4zZ3g2.4IOiwd1.F..4YkG..","60VFO54oNHtaSLKgAaOmNLtYOGg4X.CkQr.0JV8dO.VmDI7kB2.kC.GoTM0_0aSWTaxgOFFiNM0k3M0mPMWZOMCYNM8XSM8WQbGn.aCk0I7tBY.k4V.L.0g..0P.VEQfqj9H0GP.VAjSVkJLT1N.54cUXkV.........yyA.k9fRM0flV54fkPUwzNoITyoz9WmOjUGlmBH.WcQSSthOmPLbF5bvYwtI5x_Jva99LuS3mPnWk0HMafyjvBFLHiqb_.N.4krxi0c0...LE03.","60VFO54oNHtaSLKgAaOmNLtYOGg4X.CkQr.0JV8dO.VmDIFtB2.kBVGoTM0_0aSWTaxgOFFiNM0k3M0mPMWZOMCYNM8XSM8WQbGn.aCk0I7tC2Zk4V.L.0g..0P.VEQfqj9H0GP.VAjSVkJLTXN.58R06sg7.........EjXkB1er4kPwN0WPw6Ea4L5hLjgEofCrpSqNgiJV7P5rMTQLTozgebRpOSPVD1fjPmswjUAG1VU7PsEobVHkOyNJQG0sHWB6POuZEHGDTYmaDcH62jCjNz2yGyDn4vuDEV6QjMPI2mTiy7klRMPVI8TuEv1OIy5zVwUKztybhDCQWsWzF2gOLiCNV3..0Nw3F.","60VFO54oNHtaSLKgAaOmNLtYOGg4X.CkQr.0JV8dO.VmDI7kB2.lB.GoTM0_0aSWTaxgOFFiNM0k3M0mPMWZOMCYNM8XSM8WQbGn.aCk0I7tBY.k4V.L.0g..0P.VEQfqj9H0GP.VAjSVkJLPXN.53RUXkV.........yyA.k9fRM0flV54fkTSierDE4DozDZxhO4DtDn5VcL6rrLOLPhCIcAIxltliZ3qogcSJ5V.z8gXh1V3..0Nw3F.","60VFO54oNHtaSLKgAaOmNLtYOGg4X.CkQr.0JV8dO.VmDI7kB2.lCkGoTM0_0aSWTaxgOFFiNM0k3M0mPMWZOMCYNM8XSM8WQbGn.aCk0I7tBY.k4V.L.0g..0P.VEQfqj9H0GP.VAjSVkJLTXN.58706sg7.........EjXkB1er4kPwN0WPw5bDyS3TvrgEofCrpSqNgiJV7P5rMTQLTozwcLlH3kibFY_kqX3jCfAXXhzjm2syX.2Ie9flxIbEALGITJTVWwWZDGvuGCiRv_g1lOUtw8h6gHSiCIYKXTJCvrMzntiRx_JvidAAH2cbkxzEqxnMMVP_nc.cSmWqac0...LE03.","60VFO54oNHtaSLKgAaOmNLtYOGg4X.CkQr.0JV8dO.VmDI7kB2.lCVGoTM0_0aSWTaxgOFFiNM0k3M0mPMWZOMCYNM8XSM8WQbGn.aCk0I7tBY.k4V.L.0g..0P.VEQfqj9H0GP.VAjSVkJLTXN.58B06sg7.........EjXkB1er4kPwN0WPw4buUehvj6q6uMavmgvgLKXF3E2vfjCf4DVhEp6yter3nD93MlxZB9I1Asl512spX_GBagsNDOVadUVq5biUGn00mgrFj.nXYNc68a28ay7s3R78E_TycGiEeNxn_BQqKIi7jWeAmiizEq1HlyaUhIk78J5.00Au1xX.F..4YkG..","60VFO54oNHtaSLKgAaOmNLtYOGg4X.CkQr.0JV8dO.VmDI7kB2.kBVGoTM0_0aSWTaxgOFFiNM0k3M0mPMWZOMCYNM8XSM8WQbGn.aCk0I7tBY.k4V.L.0g..0P.VEQfqj9H0GP.VAjSVkJLO1N.54cUXkV.........yyA.k9fRM0flV54fkPTA8uUN4C_zyAYmxzDRvcZ02FqvvnPnIc6HxWy_tiwfDv348csdvnmpZJr_AfcwgIFWTsYLYyOyHaZ.A_XQ7170...LE03.","60VFO54oNHtaSLKgAaOmNLtYOGg4X.CkQr.0JV8dO.VmDIVqB2.kBkGoTM0_0aSWTaxgOFFiNM0k3M0mPMWZOMCYNM8XSM8WQbGn.aCk0I7tD2Nk4V.L.0g..0P.VEQfqj9H0GP.VAjSVkJLT1N.54.UXkV.........yyA.k9fRM0flV54fkTzgTKpxYyozHgrUKrOXmwH.WcQSSthORS4IcAIxGyTdYLkeSkaddnPCg8wsxl8A.k01SF_63V3..0Nw3F.","60VFO54oNHtaSLKgAaOmNLtYOGg4X.CkQr.0JV8dO.VmDI7kB2.kD.GoTM0_0aSWTaxgOFFiNM0k3M0mPMWZOMCYNM8XSM8WQbGn.aCk0I7tBY.k4V.L.0g..0P.VEQfqj9H0GP.VAjSVkJLR1N.55ZUXkV.........yyA.k9fRM0flV54fkHRbzhpUAhhzyAYmxzDRvcZ02FqvvnPnchCIcAIxGubtywdDQB5_2_DxwxG5CdLvaD81TSCvzTwYy4mq0NijRl3m4uRx0ClEAVo.Kj1c8Xc0...LE03.","60VFO54oNHtaSLKgAaOmNLtYOGg4X.CkQr.0JV8dO.VmDIVqB2.kBVGoTM0_0aSWTaxgOFFiNM0k3M0mPMWZOMCYNM8XSM8WQbGn.aCk0I7tD2Nk4V.L.0g..0P.VEQfqj9H0GP.VAjSVkJLT1N.54.UXkV.........yyA.k9fRM0flV54fkTxnYIgoAh_z_8ezfyn3_cZ02FqvvnPnchCIcAIxGyTdYLkeSr5dcnLCR.Syxt89.k22u_oc3V3..0Nw3F."]'

// Convert JSON string to a WarpScript List
JSON->

// UNWRAP those GTS
UNWRAP

// Now you have all the data needed! Let's Map
