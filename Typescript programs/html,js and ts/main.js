"use strict";
document.write("Welcome to typescript with JavaScript");
let stdNames = ["Raj", "Seeta", "Reeta", "Meeta", "Veeta"];
let DataInTableFormat = `
                        <table border=1>
                            <tr>
                                <th>Name</th>
                            </tr>
                            <tr>
                            <td>${stdNames[0]}</td>
                            </tr>
                        </table>
                        `;
document.write(DataInTableFormat);
