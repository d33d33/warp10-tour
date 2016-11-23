# Sliding-Window Mappers

In the last tutorial, we wrote a Single Value Mappers. Now, let's play with the **sliding-windows mappers** by compute the trend of those GTS and **detect the station which raised the most it's prizes**.

## MAP parameters

The **MAP** framework allows you to **apply a function on values of a Geo Time SeriesTM** that fall into a sliding window.

Map takes as input **a list of parameters**:
* **one or several lists of GTS**
* The **mapper function**.
* the **width of the sliding window before** the value
* the **width of the sliding window after** the value
* The **last element** corresponds to "**occurences**" which is the limit of computation of a number.

For all elements except the set of GTS and the mapper function a default value 0 can be used, when those elements aren't required.

## Detect the station which raised the most it's prizes.

We will now apply a **MAP with the function mapper.delta** which is a **sliding window mapper**. We will apply the derivation of this GTS of the **point after and the one before of the current point**. We will have to **configure the parameter pre and post** of the delta mapper. Then using the **BUCKETIZE framework** with the function **max or sum**, you will be able to see **which stations raised the most it's price** during the month of november, or add the huge raise between two dates (for both, it should be the same one). To apply the BUCKETIZE on the result set of GTS of the MAP function, **you can use the SWAP methods**. This method inverse two elements on the stack. In this case you can use it to inverse the list open marker and the set of GTS resulting of the MAP operation.

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

	// Compute those GTS derivation to get their trend
	mapper.delta      // Mapper function (delta)
  1                 // Pre takes one value before in the sliding window
	1                 // Post takes one value after in the sliding window
	0                 // 0 occurences
] MAP

// Open the parameter list for the BUCKETIZE framework
[

	// Get the privious set of GTS
	SWAP

	// Get the sum/max of the delta prices of the GTS in one bucket
	bucketizer.sum 		// Bucketizer function (mean)
	0 								// Lastbucket equals 0 (will be computed automatically)
	0 								// Bucketspan equals 0 (will be computed automatically)
	1 								// Divide the GTS in only one buket
] BUCKETIZE

// Get the station that have raised the most in december
LASTSORT
REVERSE
0 GET
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

// Let's Map with mapper.delta!
