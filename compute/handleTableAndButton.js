// method for updating Div
function handleMenuButton(targetDiv, sourceDiv) {
  document.getElementById(targetDiv).innerHTML = document.getElementById(sourceDiv).innerHTML;
}
// method for updating Div
$(function () {
  // Salary and Tax top Table Handling
  $(document).ready(function () {
    var $salaryTaxTable = $('#salaryTaxTable');
    $salaryTaxTable.bootstrapTable({
      data: salaryAndTaxTotal
    });
    // April Total 
    var $salaryTaxTable = $('#aprilSalaryTaxTable');
    $salaryTaxTable.bootstrapTable({
      data: salaryAndTaxTotalApril
    });
    // April Tax and Salary
    var $taxdataAprilTable = $('#taxdataAprilTable');
    $taxdataAprilTable.bootstrapTable({
      data: purchaseAndTaxApril
    });
    $taxdataAprilTable.bootstrapTable('togglePagination');
  });
  // May Total
  var $salaryTaxTable = $('#maySalaryTaxTable');
  $salaryTaxTable.bootstrapTable({
    data: salaryAndTaxTotalMay
  });
  // May Table Handling
  var $taxdataMayTable = $('#taxdataMayTable');
  $taxdataMayTable.bootstrapTable({
    data: purchaseAndTaxMay
  });
  $taxdataMayTable.bootstrapTable('togglePagination');

  // June Total
  var $salaryTaxTable = $('#junSalaryTaxTable');
  $salaryTaxTable.bootstrapTable({
    data: salaryAndTaxTotalJun
  });
  // Jun Table Handling
  var $taxdataMayTable = $('#taxdataJunTable');
  $taxdataMayTable.bootstrapTable({
    data: purchaseAndTaxJun
  });
  $taxdataMayTable.bootstrapTable('togglePagination');

  // July Total
  var $salaryTaxTable = $('#julSalaryTaxTable');
  $salaryTaxTable.bootstrapTable({
    data: salaryAndTaxTotalJul
  });
  // July Table Handling
  var $taxdataMayTable = $('#taxdataJulTable');
  $taxdataMayTable.bootstrapTable({
    data: purchaseAndTaxJul
  });
  $taxdataMayTable.bootstrapTable('togglePagination');

  // Aug Total
  var $salaryTaxTable = $('#augSalaryTaxTable');
  $salaryTaxTable.bootstrapTable({
    data: salaryAndTaxTotalAug
  });
  // Aug Table Handling
  var $taxdataMayTable = $('#taxdataAugTable');
  $taxdataMayTable.bootstrapTable({
    data: purchaseAndTaxAug
  });
  $taxdataMayTable.bootstrapTable('togglePagination');

  // Sep Total
  var $salaryTaxTable = $('#sepSalaryTaxTable');
  $salaryTaxTable.bootstrapTable({
    data: salaryAndTaxTotalSep
  });
  // Sep Table Handling
  var $taxdataMayTable = $('#taxdataSepTable');
  $taxdataMayTable.bootstrapTable({
    data: purchaseAndTaxSep
  });
  $taxdataMayTable.bootstrapTable('togglePagination');

  // Oct Total
  var $salaryTaxTable = $('#octSalaryTaxTable');
  $salaryTaxTable.bootstrapTable({
    data: salaryAndTaxTotalOct
  });
  // Oct Table Handling
  var $taxdataMayTable = $('#taxdataOctTable');
  $taxdataMayTable.bootstrapTable({
    data: purchaseAndTaxOct
  });
  $taxdataMayTable.bootstrapTable('togglePagination');

  // Nov Total
  var $salaryTaxTable = $('#novSalaryTaxTable');
  $salaryTaxTable.bootstrapTable({
    data: salaryAndTaxTotalNov
  });
  // Nov Table Handling
  var $taxdataMayTable = $('#taxdataNovTable');
  $taxdataMayTable.bootstrapTable({
    data: purchaseAndTaxNov
  });
  $taxdataMayTable.bootstrapTable('togglePagination');

  // Dec Total
  var $salaryTaxTable = $('#decSalaryTaxTable');
  $salaryTaxTable.bootstrapTable({
    data: salaryAndTaxTotalDec
  });
  // Dec Table Handling
  var $taxdataMayTable = $('#taxdataDecTable');
  $taxdataMayTable.bootstrapTable({
    data: purchaseAndTaxDec
  });
  $taxdataMayTable.bootstrapTable('togglePagination');

  // Jan Total
  var $salaryTaxTable = $('#janSalaryTaxTable');
  $salaryTaxTable.bootstrapTable({
    data: salaryAndTaxTotalJan
  });
  // Jan Table Handling
  var $taxdataMayTable = $('#taxdataJanTable');
  $taxdataMayTable.bootstrapTable({
    data: purchaseAndTaxJan
  });
  $taxdataMayTable.bootstrapTable('togglePagination');

  // Feb Total
  var $salaryTaxTable = $('#febSalaryTaxTable');
  $salaryTaxTable.bootstrapTable({
    data: salaryAndTaxTotalFeb
  });
  // Feb Table Handling
  var $taxdataMayTable = $('#taxdataFebTable');
  $taxdataMayTable.bootstrapTable({
    data: purchaseAndTaxFeb
  });
  $taxdataMayTable.bootstrapTable('togglePagination');

  // Mar Total
  var $salaryTaxTable = $('#marSalaryTaxTable');
  $salaryTaxTable.bootstrapTable({
    data: salaryAndTaxTotalMar
  });
  // Mar Table Handling
  var $taxdataMayTable = $('#taxdataMarTable');
  $taxdataMayTable.bootstrapTable({
    data: purchaseAndTaxMar
  });
  $taxdataMayTable.bootstrapTable('togglePagination');

  //Previous year Table Handling
  var $previousYearDataTable = $('#previousYearDataTable');
  $previousYearDataTable.bootstrapTable({
    data: previousYearData
  });

  window.addEventListener("load", function () {
    setTimeout(
      function open(event) {
        let random = Math.floor((Math.random() * 22));
        console.log("Random : " + random)
        if (random == 1) {
          document.querySelector("#popupAboutTaxes").innerHTML = "The hardest thing to understand in the world is the income tax."
        } else if (random == 2) {
          document.querySelector("#popupAboutTaxes").innerHTML = "The income tax created more criminals than any other single act of government."
        } else if (random == 3) {
          document.querySelector("#popupAboutTaxes").innerHTML = "Man is not like other animals in the ways that are really significant: animals have instincts, we have taxes."
        } else if (random == 4) {
          document.querySelector("#popupAboutTaxes").innerHTML = "You don't pay taxes--they take taxes."
        } else if (random == 5) {
          document.querySelector("#popupAboutTaxes").innerHTML = "Collecting more taxes than is absolutely necessary is legalized robbery."
        } else if (random == 6) {
          document.querySelector("#popupAboutTaxes").innerHTML = "I don't know if I can live on my income or not--the government won't let me try it"
        } else if (random == 7) {
          document.querySelector("#popupAboutTaxes").innerHTML = "The purpose of a tax cut is to leave more money where it belongs: in the hands of the working men and working women who earned it in the first place."
        } else if (random == 8) {
          document.querySelector("#popupAboutTaxes").innerHTML = "Govt must care for citizen more, and tax each other less."
        } else if (random == 9) {
          document.querySelector("#popupAboutTaxes").innerHTML = "People who complain about taxes can be divided into two classes: men and women.."
        } else if (random == 10) {
          document.querySelector("#popupAboutTaxes").innerHTML = "The best things in life are free, but sooner or later the government will find a way to tax them."
        } else if (random == 11) {
          document.querySelector("#popupAboutTaxes").innerHTML = "A person doesn't know how much he has to be thankful for until he has to pay taxes on it."
        } else if (random == 12) {
          document.querySelector("#popupAboutTaxes").innerHTML = "A fine is a tax for doing something wrong. A tax is a fine for doing something right."
        } else if (random == 13) {
          document.querySelector("#popupAboutTaxes").innerHTML = "Today, it takes more brains and effort to make out the income-tax form than it does to make the income."
        } else if (random == 14) {
          document.querySelector("#popupAboutTaxes").innerHTML = "They can't collect legal taxes from illegal money."
        } else if (random == 15) {
          document.querySelector("#popupAboutTaxes").innerHTML = "I have not purposely gone out to try to avoid paying income tax."
        } else if (random == 16) {
          document.querySelector("#popupAboutTaxes").innerHTML = "I would like to electrocute everyone who uses the word fair in connection with income tax policies."
        } else if (random == 17) {
          document.querySelector("#popupAboutTaxes").innerHTML = "Govt looks awfully stupid when they give income tax relief to people who do not pay income taxes."
        } else if (random == 18) {
          document.querySelector("#popupAboutTaxes").innerHTML = "The income tax is a twentieth-century socialist experiment that has failed. Before the income tax was imposed on us just 80 years ago, government had no claim to our income. Only sales, excise, and tariff taxes were allowed."
        } else if (random == 19) {
          document.querySelector("#popupAboutTaxes").innerHTML = "Anybody who is familiar with the historical data from the income tax dept knows that raising income tax rates will likely actually reduce govt revenues."
        } else if (random == 20) {
          document.querySelector("#popupAboutTaxes").innerHTML = "The only imaginative fiction being written today is income tax returns."
        } else if (random == 21) {
          document.querySelector("#popupAboutTaxes").innerHTML = "I have always paid income tax. I object only when it reaches a stage when I am threatened with having nothing left for my old age - which is due to start next Tuesday or Wednesday."
        } else if (random == 22) {
          document.querySelector("#popupAboutTaxes").innerHTML = "When there is an income tax, the just man will pay more and the unjust less on the same amount of income.."
        }

        document.querySelector(".popup").style.display = "block";
      },
      100
    )
  });

  document.querySelector("#close").addEventListener("click", function () {
    document.querySelector(".popup").style.display = "none";
  });

});